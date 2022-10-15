function distance(x1, y1, z1, x2, y2, z2) {
    let dist;
    if (arguments.length == 4){
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

console.log(distance(1, 2, 2, 2));
console.log(distance(1, 2, 1, 2, 2, 4));
