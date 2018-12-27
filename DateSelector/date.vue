<template>
    <div class="fecha">
        <div class="fecha-header">
            <div class="confirm" @click="confirm">确定</div>
            <div class="cancel" @click="cancel">取消</div>
        </div>
        <div class="fecha-content">
            <ul class="months" ref="month" @scroll="scrollEvent('month')">
                <li v-for="(item, index) in months" :key="index" 
                    @click="selected({type: 'month', id: item.id, year: item.year, index: index})"
                    :class="['fecha-item', item.id==monthId?'high':'']">{{ item.id }}月</li>
            </ul>
            <ul class="dates" ref="date" @scroll="scrollEvent('date')">
                <li class="fecha-item" v-for="(item, index) in dates" :key="index"
                    @click="selected({type: 'date', id: item, index: index})"
                    :class="['fecha-item', item == dateId?'high':'']">{{ item }}日</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.fecha {
    width: 100%;
    height: 278px;
    overflow: hidden;
    background: #fff;

    &-content {
        position: relative;
        display: flex;
        height: 233px;
        width: 100%;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: 93px;
            width: 100%;
            height: 1px;
            transform: scaleY(0.5);
            background: #e6e6e6;
        }

        &::before {
            content: '';
            position: absolute;
            bottom: 93px;
            width: 100%;
            height: 1px;
            transform: scaleY(0.5);
            background: #e6e6e6;
        }
    }

    &-header {
        line-height: 45px;
        height: 45px;
        padding: 0 14px;
        background: #f6f6f6;

        .confirm {
            float: right;
            font-size: 17px;
            color: #3cb950;
        }

        .cancel {
            float: left;
            font-size: 17px;
            color: #555;  
        }
    }

    &-item {
        line-height: 47px;
        list-style: none;
        font-size: 17px;
        color: #9aa0a6;
        transition: all .4s ease-in;

        &.high {
            font-size: 20px;
            color: #333;
            // border-bottom: 1px solid #ccc;
        }
    }
}

.months, .dates {
    flex: 1 1 auto;
    padding: 93px 0;
    text-align: center;
    width: 1%;
    overflow: auto;
}
.months::-webkit-scrollbar, .dates::-webkit-scrollbar { 
    width: 0 !important
}
.months, .dates { 
    -ms-overflow-style: none;
}
.months, .dates {
    overflow: -moz-scrollbars-none;
}

</style>
<script src="./ajk-Date.js"></script>
