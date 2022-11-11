function addRec(array) {
    sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum
}
let arr = [1, 3, 5, 7];
let arr2 = [1, 3, 5, 7,9];

console.log(addRec(arr));
console.log(addRec(arr2));