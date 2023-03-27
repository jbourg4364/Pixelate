// Your code here
const table = document.getElementsByTagName("table")[0];

function makeRow() {
    const tableRow = document.createElement("tr");
    for (let i = 0; i < 20; i++) {
        const tableData = document.createElement("td")
        tableRow.appendChild(tableData)
    }
    table.appendChild(tableRow)
}

makeRow();
makeRow();

const addRow = document.getElementById("add-row");
addRow.addEventListener("click",makeRow);

const tableData = document.createElement("td")

tableData.className = "gold"

function colorize(event) {
    const target = event.target;
    if (target.className.length) {
        target.className = " "
    } else {
        target.className = "gold"
    }
}

table.addEventListener("click", colorize);