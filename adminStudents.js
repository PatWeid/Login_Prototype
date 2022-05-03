var table = document.getElementById('table');
var tr;

for (let i = 0; i < allStudents.length; i++) {

    tr = table.insertRow();
    let tabCell = tr.insertCell();
    tabCell.innerHTML = allStudents[i].id;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStudents[i].firstName;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStudents[i].lastName;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStudents[i].dob;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStudents[i].email;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStudents[i].department;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStudents[i].semester;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStudents[i].gender;
}


function addStudentForm() {
    $(document).ready($("#content").load("addStudent.html"));
}

function updateStudent() {
    $(document).ready($("#content").load("updateStudent.html"));
}

function deleteStudentForm() {
    $(document).ready($("#content").load("deleteStudent.html"));
}