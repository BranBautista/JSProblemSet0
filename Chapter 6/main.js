//Va a ser una cadena. 
//Tengo primero el objeto Shape (figura) y tiene 1 propiedad pEdges y 1 metodo fnDisplay
//luego Un cuadrilatero es una figura entonces el objeto hereda la propiedad de Shape (pEdges y fnDisplay) y ademas 2 metodos fnArea, fnPerimeter
//luego Un cuadrado es un cuadrilatero, y por lo tanto el objecto cuadradado hereda todas estas propiedades. 
//triangulo es una figura entonces hereda la propiedad y el metodo de Shape y tiene los dos metodos fnArea, fnPerimeter


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