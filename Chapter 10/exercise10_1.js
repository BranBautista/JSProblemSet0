var myLib = {
    math: {
        real: {
            add: function (a, b) { return a + b },
            sub: function (a, b) { return a - b },
            mul: function (a, b) { return a * b }
        },
        complex: {
            Num: function (real, img) {
                this.real = real;
                this.img = img;
            },
            add: function (a, b) {
                var complexAddArray = [];
                var addReal = a['real'] + b['real'];
                var addImg = a['img'] + b['img'];
                complexAddArray = [[addReal, -addImg], [addImg, addReal]];
                return complexAddArray;
            },
            sub: function (a, b) {
                var complexSubArray = [];
                var subReal = a['real'] - b['real'];
                var subImg = a['img'] - b['img'];
                complexSubArray = [[subReal, -subImg], [subImg, subReal]];
                return complexSubArray;
            },
            mul: function (a, b) {
                var complexMulArray = [];
                var mulReal = a['real'] * b['real'] - a['img'] * b['img'];
                var mulImg = a['real'] * b['img'] + a['img'] * b['real'];
                complexMulArray = [[mulReal, -mulImg], [mulImg, mulReal]];
                return complexMulArray;
            }
        },
        matrix: {
            add: function (a, b) {
                if (a.length == b.length && a[0].length == b[0].length) {
                    var addMatrix = [];
                    for (let i = 0; i < a.length; i++) {
                        addMatrix[i] = [];
                        for (let j = 0; j < a.length; j++) {
                            addMatrix[i][j] = a[i][j] + b[i][j];
                        }
                    }
                }
                else {
                    throw new Error ('The matrix addition is undefined');
                }
            },
            sub: function (a, b) {
                if (a.length == b.length && a[0].length == b[0].length) {
                    var subMatrix = [];
                    for (let i = 0; i < a.length; i++) {
                        for (let j = 0; j < a.length; j++) {
                            subMatrix[i][j] = a[i][j] - b[i][j];
                        }
                    }
                    return subMatrix;
                }
                else {
                    throw new Error ('The matrix substraction is undefined');
                }
            },
            mul: function (a, b) {
                if (a[0].length == b.length) {
                    var mulMatrix = [];
                    for (let i = 0; i < a.length; i++) {
                        mulMatrix[i] = [];
                        for (let j = 0; j < b[0].length; j++) {
                            mulMatrix[i][j] = 0;
                            for (let k = 0; k < b.length; k++) {
                                mulMatrix[i][j] = mulMatrix[i][j] + a[i][k] * b[k][j];
                            }
                        }
                    }
                    return mulMatrix;
                }
                else {
                    throw new Error ('The matrix multiplication is undefined');
                }
            },
            eye: function (size) {
                var eyeMatrix = [];
                for (let i = 0; i < size; i++) {
                    eyeMatrix[i] = [];
                    for (let j = 0; j < size; j++) {
                        if (i === j) {
                            eyeMatrix[i][j] = 1;
                        }
                        else {
                            eyeMatrix[i][j] = 0;
                        }
                    }
                }
                return eyeMatrix;
            },
            dot: function (m, a) {
                if (m[0].length == a.length && m.length == 1) {
                    var sumationCont = 0;
                    for (let j = 0; j < a.length; j++) {
                        sumationCont = sumationCont + m[0][j] * a[j];
                    }
                    return sumationCont;
                } else {
                    throw new Error ('Please call the matrix multiplication');
                }
            },
            times: function (a, b) {
                if ((a.length == b.length) && (a[0].length == b[0].length)) {
                    var mulMatrix = [];
                    for (let i = 0; i < a.length; i++) {
                        mulMatrix[i] = [];
                        for (let j = 0; j < a.length; j++) {
                            mulMatrix[i][j] = a[i][j] * b[i][j];
                        }
                    }
                    return mulMatrix;
                } else {
                    throw new Error ('The element-wise product is undefined');
                }
            }
        }
    }
};

//**** Function Calls ****/

// var answer = myLib.math.real.sub(
//     myLib.math.real.add(20,22),
//     myLib.math.real.mul(2,5)
// );

// var ans = myLib.math.matrix.times(
//     myLib.math.matrix.eye (4),
//     myLib.math.complex.sub (
//         new myLib.math.complex.Num (
//             myLib.math.real.add(5,2),
//             -3),
//         new myLib.math.complex.Num(3,4)
//     )
// );

//**** Function Calls with the 'with' statement ****/

with (myLib) { with (math) { with (real) {
    var answer = sub(add(20, 22), mul(2, 5))
}; }; };

console.log(answer);

with (myLib) { with (math) { with (complex) {
    var ans = matrix.times(
        matrix.eye(4),
        sub(new Num(real.add(5, 2), -3), new Num(3, 4))
    );
}; }; };

console.log(ans)

//**** Function Calls without the 'with' statement ****/

let realAdd = myLib.math.real.add;
let realSub = myLib.math.real.sub;
let realMul = myLib.math.real.mul;
let complexNum = myLib.math.complex.Num;
let complexSub = myLib.math.complex.sub;
let matrixEye = myLib.math.matrix.eye;
let matrixTimes = myLib.math.matrix.times;

var answer2 = realSub(realAdd(20,22),realMul(2,5));

console.log(answer2);

var ans2 = matrixTimes(matrixEye(4),complexSub(new complexNum(realAdd(5,2),-3),new complexNum(3,4)));

console.log(ans2);
