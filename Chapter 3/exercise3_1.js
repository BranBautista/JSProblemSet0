function mul(num1, num2) {
    let mult, numBase13;
    mult = num1 * num2;
    numBase13 = mult.toString(13);
    return numBase13;
}

console.log(mul(9, 6));
