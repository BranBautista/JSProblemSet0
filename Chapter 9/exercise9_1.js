function dataParse(string) {
    let object = JSON.parse(string);
    object.myFn = eval("(" + object.myFn + ")");
    return object;
}

let str = '{"prop1": 42, "myFn": "function(a,b){return a + b + this.prop1;}"}';

let objectParsed = dataParse(str);

console.log(objectParsed);
console.log(objectParsed.prop1);
console.log(objectParsed.myFn(4,52));
