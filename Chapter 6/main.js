// *************************************** //
// *****  JavaScript Problem Set #0  ***** //
// *************************************** //

// ----------------------------- //
// ******-- Chapter 06 --****** //
// ----------------------------- //

// ******-- Exercise 01 --****** //

class Shape{
    constructor (pEdges){
        this.pEdges = pEdges;
    }
    fnDisplay (){
        return `I have ${this.pEdges} number of Edges`;
    }
}

class Quadrilateral extends Shape{
    constructor (pEdges){
        super(pEdges)
    }
    fnPerimeter (perimeter){
        return `The length of my perimeter is ${perimeter}`;
    }
    fnArea (area){
        return `My area is ${area}`;
    }
}


class Triangle extends Shape{
    constructor (pEdges){
        super(pEdges)
    }
    fnPerimeter (perimeter){
        return `The length of my perimeter is ${perimeter}`;
    }
    fnArea (area){
        return `My area is ${area}`;
    }
}


class Square extends Quadrilateral{
    constructor (pEdges){
        super(pEdges)
    }
}

let shape = new Shape();
let quadrilateral = new Quadrilateral(4);
let triangle = new Triangle(3);
let square = new Square(4);

console.log(quadrilateral.fnDisplay('quadrilateral'))
console.log(quadrilateral.fnPerimeter('30cm'))
console.log(quadrilateral.fnArea('15cm2'))
