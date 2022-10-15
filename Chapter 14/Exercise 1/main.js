let btn = document.getElementById("btninput");
let container = document.getElementById('container');

btn.addEventListener("click", function(){
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    let tableOpen = '<table>\n';
    let tableBody = '';
  
    for(let i=0; i<rows;i++)
    {
        tableBody = tableBody + '<tr>';
        for(let j=0; j<columns;j++)
        {
            tableBody = tableBody + '<td>';
            tableBody = tableBody + '</td>'
        }
        tableBody += '</tr>\n';
    }
    let tableClose = '</table>';
    container.innerHTML = tableOpen + tableBody + tableClose;
})
