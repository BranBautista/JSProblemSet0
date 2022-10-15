

const tableContainer = document.getElementById("table");

const table = document.createElement("div");
table.classList.add("gridcontainer");

for (i=0; i<25; i++){
    const row = document.createElement("div");
    row.classList.add("element");
    const text = document.createTextNode(`${i+1}`);
    row.appendChild(text);
    table.appendChild(row);
}

tableContainer.appendChild(table);

const elements = document.getElementsByClassName("element");

for (let i = 0; i < elements.length; i++){
    elements[`${i}`].addEventListener("click", function (){
        alert(this.innerHTML);
    })
}
