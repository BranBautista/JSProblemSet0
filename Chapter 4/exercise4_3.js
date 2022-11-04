function objectCustom(number) {

    obj = {
        get prop() {
                return this.__prop__;
        },
        set prop(number) {
            if (typeof number == 'number'){
                this.__prop__ = number;
            }
            else {
                throw new Error('Whops, is not a number')
            }
        },
    };

    Object.defineProperty(obj, "__prop__", {value: number, enumerable:false, writable:false})

    obj.prop = number

    return obj

}

const n = objectCustom(3);
