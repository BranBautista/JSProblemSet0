function CustomObject(a,b){
    this.a = a;
    this.b = b;
}

CustomObject.prototype.c = function(){
    return this.a + this.b;
}

let obj = new CustomObject(1,2);

function printObjProp(object,propObjInstance){
    let properties = '';
    let propArray = Object.getOwnPropertyNames(object);
    let protoObj = Object.getPrototypeOf(object);
    let propProtoArray = Object.keys(protoObj);

    if(propObjInstance === true){
        properties = propArray.toString();
    }
    else{
        properties = propArray.concat(propProtoArray).toString();
    }
    return properties;
}

console.log(printObjProp(obj));
console.log(printObjProp(obj,false))
console.log(printObjProp(obj,true))
