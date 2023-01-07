function addRec(arrayNumbers) {
    let number = arrayNumbers.shift();
    if (arrayNumbers.length !== 0) {
        let sum = number + addRec(arrayNumbers);
        return sum;
    }
    return number;
}

let arr = [1, 3, 5, 7];
let arr2 = [1, 3, 5, 7, 9];

console.log(addRec(arr));
console.log(addRec(arr2));