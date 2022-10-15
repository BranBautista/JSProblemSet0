function newDistance(x1, y1, z1, x2, y2, z2) {
    let cuadraticSum = 0;
    let dist;

    if (arguments.length == 2 && typeof y1 == "object"){
        if (x1.length == y1.length) {
            for (let i = 0; i < x1.length; i++) {
                cuadraticSum = cuadraticSum + (y1[i] - x1[i]) * (y1[i] - x1[i]);
            }
            return dist = Math.sqrt(cuadraticSum);
        } else {
            throw new Error('Incompatible point data')
        }
    }
    else if (arguments.length == 4){
        y2 = x2;
        x2 = z1;
        dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    } 
    else if (arguments.length == 6){
        dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));
    }
    else {
        throw new Error('Insufficient parameters');
    }
    return dist;
}

console.log(newDistance([1, 2], [2, 2]));
console.log(newDistance(1, 2, 2, 2));
console.log(newDistance(1, 2, 1, 2, 2, 4));
console.log(newDistance([1, 2, 1], [2, 2, 4]));
