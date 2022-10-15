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
