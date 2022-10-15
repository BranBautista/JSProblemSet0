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
