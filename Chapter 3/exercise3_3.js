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
