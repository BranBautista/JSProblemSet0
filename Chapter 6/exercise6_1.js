class Physics{
    constructor (mathematics1, mathematics2, mathematics3, mathematics4, mathematics5, mathematics6){
        this.mathematics1 = mathematics1;
        this.mathematics2 = mathematics2;
        this.mathematics3 = mathematics3;
        this.mathematics4 = mathematics4;
        this.mathematics5 = mathematics5;
        this.mathematics6 = mathematics6;
    }
    fnDisplay (){
        return `Modern physics make use of this mathematics' fields ${this.mathematics1}, ${this.mathematics2}, ${this.mathematics3}, ${this.mathematics4}, ${this.mathematics5} and ${this.mathematics6} in order to understand the nature.`;
    }
}

class ClassicalMechanics extends Physics{
    constructor (mathematics1, mathematics2, mathematics3, mathematics4, mathematics5, mathematics6){
        super(mathematics1, mathematics2, mathematics3, mathematics4, mathematics5, mathematics6);
    }
    fnMainFields (field1, field2, field3, field4){
        return `The main fields that Classical Mechanics studies are: ${field1}, ${field2}, ${field3}, ${field4}.;`
    }
    fnMathematics (){
        return `Also, I make use of these fields of mathematics: ${this.mathematics1}, ${this.mathematics2}, ${this.mathematics3}, ${this.mathematics4} and ${this.mathematics6}, mainly.`;
    }
}


class QuantumMechanics extends Physics{
    constructor (mathematics1, mathematics2, mathematics3, mathematics4, mathematics5, mathematics6){
        super(mathematics1, mathematics2, mathematics3, mathematics4, mathematics5, mathematics6);
    }
    fnMathematics (){
        return `Also, I make use of these fields of mathematics; ${this.mathematics2}, ${this.mathematics4}, ${this.mathematics5} and ${this.mathematics6}, mainly.`;
    }
}


class GeneralRelativity extends ClassicalMechanics{
    constructor (mathematics1, mathematics2, mathematics3){
        super(mathematics1, mathematics2, mathematics3);
    }
    fnGRDisplay (blackHole){
        return `I am General Relativity and I need ${this.mathematics1}, ${this.mathematics2} and ${this.mathematics3} in order to study ${blackHole} black hole.`;
    }
}

let physics = new Physics();
let classicalMechanics = new ClassicalMechanics('differential geometry', 'linear algebra', 'topology', 'differential equations','special functions' ,'group algebra');
let quantumMechanics = new QuantumMechanics('differential geometry', 'linear algebra', 'topology', 'differential equations','special functions' ,'group algebra');
let generalRelativity = new GeneralRelativity('differential geometry', 'topology', 'differential equations');

console.log(classicalMechanics.fnDisplay());
console.log(classicalMechanics.fnMainFields('analytical mechanics', 'thermodynamics', 'electrodynamics', 'hydrodynamics'));
console.log(classicalMechanics.fnMathematics());
console.log(generalRelativity.fnGRDisplay('M87'));
console.log(quantumMechanics.fnMathematics());
