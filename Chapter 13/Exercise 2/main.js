const btn = document.getElementById("btnThreeTimes");
const btnUsage = document.getElementById("buttonUsage");

(function () {

    let counter = 0;

    btn.addEventListener("click", function () {
        counter = counter + 1;
        btnUsage.value = counter;
        if (counter == 3) {
            btn.disabled = true;
        }
    })

}())
