var index = document.getElementById("index");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");

var studentsTable = document.getElementById("students");

function validateAndAdd() {
    var indexV = index.value.trim();
    var firstNameV = firstName.value.trim();
    var lastNameV = lastName.value.trim();

    if (indexV !== "" || firstNameV !== "" || lastNameV !== "") {
        addRow(studentsTable, indexV, firstNameV, lastNameV);
        clearInputs();
    }
}

function addRow(table, index, firstName, lastName) {
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = index;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
}

function clearInputs() {
    index.value = "";
    firstName.value = "";
    lastName.value = "";
}