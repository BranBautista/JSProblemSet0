// *************************************** //
// *****  JavaScript Problem Set #0  ***** //
// *************************************** //

// ----------------------------- //
// ******-- Chapter 03 --****** //
// ----------------------------- //

// ******-- Exercise 01 --****** //

function mul(num1, num2) {
    let mult;
    let div;
    let mod;
    let strng = '';
    mult = num1 * num2;
    if (mult > 13) {
        div = Math.floor(54 / 13);
        console.log(div)
        mod = mult % 13;
        strng = mod + strng;
        while (div > 0) {
            mod = div % 13;
            strng = mod + strng;
            div = Math.floor(div / 13);
        }
    }
    return strng;
}

console.log(mul(9, 6))


// ******-- Exercise 02 --****** //


function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add(1, 2) + add(1, 4, 6, 7, 2));


// ******-- Exercise 03 --****** //


myMath = {};

myMath.add = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

myMath.mul = function () {
    let times = 1;
    for (let i = 0; i < arguments.length; i++) {
        times = times * arguments[i];
    }
    return times;
}

myMath.fact = function (num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
    }
    return factorial
}

console.log(myMath.add(1, 2, 3));
console.log(myMath.mul(1, 2, 3));
console.log(myMath.fact(3));


// ******-- Exercise 04 --****** //


function Array(size) {
    let sizeSide;
    sizeSide = Math.sqrt(size);
    return sizeSide + ' X ' + sizeSide + ' px dummy image data';
}

let data = Array(1600);

//This is going to be our creator function:
function Image(data, sizeX, sizeY, name) {
    if (sizeX > 0 && sizeY > 0) { //Here I prevent negative values
        this.data = data;
        this.width = sizeX;
        this.heigth = sizeY;
        this.name = name;
    }
    else {
        return 'Please enter a valid image'
    }
}

Image.prototype.getPixel = function (positionX, positionY) {
    //Here I prevent offsize pixels and negative values  
    if ((positionX <= this.width && positionX > 0) && (positionY <= this.heigth && positionY > 0)) {
        if (positionX <= this.width / 2) {
            if (positionY <= this.heigth / 2) {
                return 'Yellow';
            } else {
                return 'Blue';
            }
        } else {
            if (positionY <= this.heigth / 2) {
                return 'Red';
            } else {
                return 'Green';
            }
        }
    } else {
        return 'This pixel is not part of the image';
    }
}

let img = new Image(data, 40, 40, 'myImage');

console.log(img.data);
console.log(img.width);
console.log(img.heigth);
console.log(img.name);
console.log(img.getPixel(18, 4));
console.log(img.getPixel(18, 24));
console.log(img.getPixel(36, 24));
console.log(img.getPixel(36, 4));
console.log(img.getPixel(-36,-4));


// ******-- Exercise 05 --****** //


//This will be our function creator
function CustomObject(a,b){
    this.a = a;
    this.b = b;
}

CustomObject.prototype.c = function(){
    return this.a + this.b;
}

let obj = new CustomObject(1,2);

function printObjProp(object,booleanValue){
    let properties = '';
    let propArray = Object.getOwnPropertyNames(object);
    //Here, it returns an array with 'constructor' element. Remove it with the method pop()
    let propProtoArray = Object.getOwnPropertyNames(object.__proto__).pop();
    for (let i = 0; i < propArray.length; i++){
        properties = properties + propArray[i] + ',';
    }
    if(typeof booleanValue == 'undefined'){
        for (let i = 0; i < propProtoArray.length; i++){
            properties = properties + propProtoArray[i] + ','
        }
    } else {
        if (booleanValue == false){
            for (let i = 0; i < propProtoArray.length; i++){
                properties = properties + propProtoArray[i] + ','
            }
        }
    }
    return properties;
}

console.log(printObjProp(obj));
console.log(printObjProp(obj,false))
console.log(printObjProp(obj,true))
