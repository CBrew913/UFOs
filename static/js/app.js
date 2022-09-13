// importing the data from data.js
const tableData = data;

// referencing the HTML table using d3
var tbody = d3.select("tbody");

// defining the function that will build the table
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}