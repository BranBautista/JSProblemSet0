function dataType() {
    let arrayType = [];
    for (let i = 0; i < arguments.length; i++) {
        let value = arguments[i];
        let className = value.constructor.name;
        if(typeof value == 'number'){
            if (!Number.isInteger(value)){
                arrayType[i]='Float';
            }
            else {
                arrayType[i] = className;
            }
        }
        else{
            arrayType[i] = className;
        }
    }
    return arrayType;
}

console.log(dataType(1, 6.2831, "pi*2", [function () { }, 1],{}, function(){}))
