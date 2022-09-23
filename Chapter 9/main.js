// *************************************** //
// *****  JavaScript Problem Set #0  ***** //
// *************************************** //

// ----------------------------- //
// ******-- Chapter 09 --****** //
// ----------------------------- //

// ****** -- Exercise 1 -- ******* 

function dataParse(string) {
    let objectString, indexComma, property, propertyValue, method, methodValue;
    let stringLength = string.length;
    let counter = 0;
    let arrayProperties = [];
    let object = {};

    if (string.startsWith('{')) {
        objectString = string.slice(1, stringLength-2);
    }
    else {
        objectString = string;
    }

    while (string.search(':') !== -1) {
        let indexColons;
        counter = counter + 1;
        indexColons = string.search(':');
        string = string.slice(indexColons + 1);
    }

    for (let i = 0; i < counter; i++) {
        indexComma = objectString.indexOf(',');
        if (i == counter - 1) {
            arrayProperties[i] = objectString.slice(indexComma+2,stringLength)
        } else {
            arrayProperties[i] = objectString.slice(0,indexComma);
        }
    }

    //Now we are going to work with the properties separately
    

    for (let i = 0; i < arrayProperties.length; i++){
        let indexColons;
        if (arrayProperties[i].search('function()') == -1){ //If there is not present function (method)
            indexColons = arrayProperties[i].search(':');
            property = arrayProperties[i].slice(0,indexColons)
            propertyValue = arrayProperties[i].slice(indexColons+1);
            object[property]=Number(propertyValue);
        }
        else {
            let indexFirstVariable, indexLastVariable, index;
            let variables,action;
            let arrayVariables = [];
            indexColons = arrayProperties[i].search(':');
            method = arrayProperties[i].slice(0,indexColons);
            methodValue = arrayProperties[i].slice(indexColons+1);
            indexFirstVariable = methodValue.search(',');
            indexLastVariable = methodValue.search('return');
            variables = methodValue.slice(indexFirstVariable+2,indexLastVariable-2);
            variablesCounter = variables.match(/,/g).length + 1;
            for (let i = 0; i < variablesCounter; i++){
                index = variables.indexOf(',');
                if (i == counter - 1) {
                    arrayVariables[i] = variables.slice(index+2,variables.length)
                } else {
                    arrayVariables[i] = variables.slice(0,index);
                }
            }
            action = methodValue.slice(indexLastVariable,methodValue.length)
            let actionFunction = new Function(arrayVariables[0], arrayVariables[1], action);
            object[method] = actionFunction;
        }
    }
    return object;
}

let strOld = '{prop1: 42, myFn: function(a,b) {return a + b this.prop1;}}';
let str = '{prop1: 42, myFn: function(), a, b, return a + b + this.prop1}}';
let obj = dataParse(str);

console.log(obj);
