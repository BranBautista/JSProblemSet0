let counter = 0

function functionAdd(a, b) {
    console.log (a + b);
}

function functionSubs(a, b) {
    console.log(a - b);
}

function functionMult(a, b) {
    console.log(a * b);
}

setInterval(function(){
    counter += 1000;
    if (counter%30000==0){
        functionAdd(5,3);
    }
    if (counter%60000==0){
        functionSubs(5,3);
    }
    if (counter%75000==0){
        functionMult(5,3);
    }
},1000);
