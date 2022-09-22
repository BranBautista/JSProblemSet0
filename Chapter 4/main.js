// *************************************** //
// *****  JavaScript Problem Set #0  ***** //
// *************************************** //

// ----------------------------- //
// ******-- Chapter 04 --****** //
// ----------------------------- //

// ******-- Exercise 01 --****** //


function fibonacciNumber(num) {
    let fibNum;
    if (num <= 2) {
        fibNum = 1;
    } else {
        fibNum = fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
    }
    return fibNum;
}

let n = fibonacciNumber(4);
let m = fibonacciNumber(9);

console.log(n);
console.log(m);


// ******-- Exercise 02 --****** //


let sum = 0;
function addRec(array) {
    let size = array.length;
    if (size < 1) {
        sum = sum;
    } else {
        sum = sum + array.pop();
        addRec(array);
    }
    return sum;
}

let arr = [1, 3, 5, 7];

console.log(addRec(arr));


// ******-- Exercise 03 --****** //


function objectCustom(number) {
    if (typeof number == 'number') {
        const objectNumber = {
            set addNumber(number){ 
                this.number = number
            } 
        }
        objectNumber.addNumber = number;
        return objectNumber
    }
    else {
        return 'Cannot be assigned.'
    }
}

console.log(objectCustom(3));


// ******-- Exercise 04 --****** //


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


// ******-- Exercise 05 --****** //


function distance(x1, y1, z1, x2, y2, z2) {
    let dist;
    if (typeof z1 == "undefined") {
        throw new Error('Insufficient parameters');
    } else {
        if (typeof y2 !== "undefined") {
            dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));
        } else {
            y2 = x2;
            x2 = z1;
            dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        }
        return dist;
    }
}


console.log(distance(1, 2, 2, 2));
console.log(distance(1, 2, 1, 2, 2, 4));
//console.log(distance(1, 2));


// ******-- Exercise 06 --****** //


function newDistance(x1, y1, z1, x2, y2, z2) {
    let cuadraticSum = 0;
    let dist;
    if (typeof y1 == "object") {
        if (x1.length == y1.length) {
            for (let i = 0; i < x1.length; i++) {
                cuadraticSum = cuadraticSum + (y1[i] - x1[i]) * (y1[i] - x1[i]);
            }
            return dist = Math.sqrt(cuadraticSum);
        } else {
            throw new Error('Incompatible point data')
        }
    } else {
        if (typeof y2 !== "undefined") {
            dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));
        } else {
            y2 = x2;
            x2 = z1;
            dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        }
        return dist;

    }
}

console.log(newDistance([1, 2], [2, 2]));
console.log(newDistance(1, 2, 2, 2));
console.log(newDistance(1, 2, 1, 2, 2, 4));
console.log(newDistance([1, 2, 1], [2, 2, 4]));
//console.log(newDistance([1,2],[2,2,4]));