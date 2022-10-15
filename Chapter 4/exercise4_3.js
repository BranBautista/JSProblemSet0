function objectCustom(number) {
    const obj = {
        get prop() {
            if(typeof this.__prop__ == 'number'){
                return this.__prop__;
            }
            else{
                throw new Error('Whops, is not a number')
            }
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

    Object.defineProperty(obj, "__prop__", {value: number, enumerable:false, writable:true})


    return obj

}

const n = objectCustom(3);
n.prop= 4454

console.log(n.prop);
