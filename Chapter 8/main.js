// *************************************** //
// *****  JavaScript Problem Set #0  ***** //
// *************************************** //

// ----------------------------- //
// ******-- Chapter 08 --****** //
// ----------------------------- //


// ****** -- Exercise 1 -- ******* 

arraySongs = [
    'You only live once', 'Island in the sun', 'Creep', 'Starlight', 'On melancholy hill', 'Reptilia', 'Instant crush', 'Mr. Brightside'
]

function timerEveryTime(seconds) {
    function randomNum(interval) {
        return Math.floor(Math.random() * interval)
    }
    function callSentence() {
        let index = randomNum(arraySongs.length);
        console.log(arraySongs[index])
    }
    setInterval(callSentence, seconds * 1000);
}

timerEveryTime(5) //I select how many seconds would be the interval of console.log


// ****** -- Exercise 2 -- ******* 

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function functionAdd(a, b) {
    counter1 = counter1 + 1;
    if (counter1%6==0){
        console.log (a + b);
    } 
}

function functionSubs(a, b) {
    counter2 = counter2 + 1;
    if (counter2%6==0){
        console.log(a - b);
    }
}

function functionMult(a, b) {
    counter3 = counter3 + 1;
    if (counter3%5==0){
        console.log(a * b);
    }
}

mainTime = 5000;
let funcArray = [functionAdd, functionSubs, functionMult];
for (let i=0; i<funcArray.length;i++){
    setInterval(funcArray[i], (mainTime*(i+1)), 3, 5);
}

