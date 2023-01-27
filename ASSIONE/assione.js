window.addEventListener("load", load);

function load() {
   document.getElementById("rows").value = 10;
   document.getElementById('columns').value = 10;

   createTable()
}
function createTable() {
  var rows = document.getElementById("rows").value;
  var columns = document.getElementById("columns").value;
  var table = document.getElementById("table");

  table.innerHTML = "";
  for (var i = 1; i <= rows; i++) {
    var row = table.insertRow();
    for (var j = 1; j <= columns; j++) {
      var cell = row.insertCell();
      cell.innerHTML = i + " X " + j + " = " + i * j;
    }
  }
}