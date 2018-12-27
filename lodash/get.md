_.get 函数

```
_get(target, attr) {
    let cur_attr, next_attr, index

    if(!/\./g.test(attr)) return target[attr] || undefined;

    //多重取值
    if(/\./g.test(attr)) {
        index = attr.indexOf('.');
        cur_attr = attr.slice(0, index);
        next_attr = attr.slice(index + 1);
        console.log('多重取值', index, cur_attr, next_attr)
    }

    // //不是数组和对象返回undefined
    if(typeof(target) !== 'object' && !(Array.isArray(target))) {
        console.log('不是数组和对象返回undefined')
        return undefined;
    }

    return _get(target[cur_attr], next_attr)
}
```
