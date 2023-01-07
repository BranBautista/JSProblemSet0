let btn = document.getElementById("btninput");
let container = document.getElementById('container');

btn.addEventListener("click", function(){
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    let grid = rows*columns;
  
    const table =  document.createElement("div");
    table.classList.add("gridcontainer");
    table.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    for(let i=0; i<grid; i++){
        const row = document.createElement("div");
        row.classList.add("element");
        table.appendChild(row)
    }

    container.appendChild(table)
})
