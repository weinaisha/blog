export default {
    props:['thisYear', 'thisMonth', 'thisDate', 'lastMonths', 'nextMonths'],

    data () {
        return {
            year: parseInt(this.thisYear) || new Date().getFullYear(),
            dateId: parseInt(this.thisDate) || new Date().getDate(),
            yearId: parseInt(this.thisYear) || new Date().getFullYear(),
            monthId: parseInt(this.thisMonth) || new Date().getMonth() + 1,
            startMonth: new Date().getMonth() + 1,
            itemH: 47,
            distanceTop: 93,
            scrollIndex: NaN,
            scrollclock: ''
        }
    },
    
    created() {
    },
    
    computed: {
        months () {

            //默认12个月
            if (!this.lastMonths && !this.nextMonths) {
                // return Array.from(new Array(12), (val, index) => {
                //     return {
                //         id: index + 1,
                //         year: this.year
                //     }
                // });
                let temparr = []
                for(let i = 0; i < 12; i++ ) {
                    temparr.push({
                        id: i + 1,
                        year: this.year
                    })
                }
                return temparr
            } 

            //当前月与前几个月
            if (this.lastMonths && !this.nextMonths) {
                let N = this.lastMonths;
                let id = this.startMonth;
                let months = [];
                for (let j = 0; j < N; j++) {
                    if (id - j <= 0) {
                        // let a = Array.from(new Array(N - j), (v, i) => {
                        //     return {
                        //         id: 12 - i,
                        //         year: this.year - 1
                        //     }
                        // });
                        let a = []
                        for(let i = 0; i < N - j; i++ ) {
                            a.push({
                                id: 12 - i,
                                year: this.year + 1
                            })
                        }
                        months.unshift(a.reverse());
                        break
                    }
                    months.unshift({
                        id: id - j,
                        year: this.year
                    });
                }
                return [].concat(...months);
            } 

            //当前月与下几个月
            if (!this.lastMonths && this.nextMonths) {
                let N = this.nextMonths;
                let id = this.startMonth;
                let months = [];
                for (let j = 0; j < N; j++) {
                    if (id + j > 12) {
                        // let a = Array.from(new Array(N - j), (v, i) => {
                        //     return {
                        //         id: i + 1,
                        //         year: this.year + 1
                        //     }
                        // });
                        let a = []
                        for(let i = 0; i < N - j; i++ ) {
                            a.push({
                                id: i + 1,
                                year: this.year + 1
                            })
                        }
                        months.push(a);
                        break
                    }
                    months[j] = {
                        id: id + j,
                        year: this.year
                    };
                }
                return [].concat(...months);
            } 
        },

        dates () {
            let smallm = [4,6,9,11];
            let bigm = [1,3,5,7,8,10,12];
            let isLeapYear = this.isLeapYear(this.yearId);
            let N;

            if (this.monthId === 2) {
                N = isLeapYear ? 29 : 28;
            }

            if (bigm.indexOf(this.monthId) >= 0) {
                N = 31;
            } 
            if (smallm.indexOf(this.monthId) >= 0) {
                N = 30;
            }
            
            // return Array.from(new Array(N), (val, index) => index + 1);
            let a = []
            for(let i = 0; i < N; i++ ) {
                a.push(i + 1)
            }
            return a;
        }
    },

    mounted() {
        var monthIndex;
        this.months.forEach((m, i) => {
            if(m.id == this.monthId) {
                monthIndex = i;
            }
        });
        this.move('month', monthIndex)
        this.move('date', this.dateId - 1)
    },

    methods: {

        //判断闰年
        isLeapYear(year) {
            if (year % 2 === 0 && year % 100 !== 0 || year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        },

        confirm() {
            //把选择的日期返回
            this.$emit("confirm", {
                year: this.yearId,
                month: this.monthId,
                date: this.dateId
            })
        },

        cancel() {
            this.$emit("cancel", false)
        },

        selected(op) {
            if (op.type == 'month') {
                this.monthId = op.id;
                this.yearId = op.year;
                this.move('month', op.index)
            }
            if (op.type == 'date') {
                this.dateId = op.id;
                this.move('date', op.index)
            }

        },

        move(type, index) {
            this.$refs[type].scrollTop = index * this.itemH;
        },

        scrollEvent(type) {
            if(type == 'month') {
                let s = this.$refs[type].scrollTop;
                let index = Math.round(s / this.itemH);
                this.monthId = this.months[index].id;
                this.yearId = this.months[index].year;
                this.months.forEach((m,i) => {
                    if(m.id == this.monthId) {
                        this.scrollIndex = i
                    }
                })
            } 

            if(type == 'date') {
                let s = this.$refs[type].scrollTop;
                let index = Math.round(s / this.itemH);
                this.dateId = index + 1;
                this.scrollIndex = index
            }

            clearTimeout(this.scrollclock);
            this.scrollclock = setTimeout(() => {
                this.move(type, this.scrollIndex);
            },100)
        }
    }
}
