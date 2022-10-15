function addRec(array, add = 0) {
    let sum = add;
    let size = array.length;
    if (size < 1) {
        console.log(sum)
    } else {
        sum = sum + array.pop();
        addRec(array,sum);
    }
}

let arr = [1, 3, 5, 7];
let arr2 = [1, 3, 5, 7,9];

addRec(arr);
addRec(arr2);
