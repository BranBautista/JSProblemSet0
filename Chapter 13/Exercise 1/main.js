const tableContainer = document.getElementById("table");

const table = document.createElement("div");
table.classList.add("gridcontainer");

function alertNumber(event) {
    alert(event.target.innerText);
}

for (i=0; i<25; i++){
    const row = document.createElement("div");
    row.classList.add("element");
    const text = document.createTextNode(`${i+1}`);
    row.appendChild(text);
    table.appendChild(row);
}

table.addEventListener("click", alertNumber);

tableContainer.appendChild(table);