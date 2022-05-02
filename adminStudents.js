var table = document.getElementById('table');
var tr;

function displayDate() {
    console.log('buttonclick');
}

for (let i = 0; i < allStudents.length; i++) {

    tr = table.insertRow(); // Create a new row.
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

    let btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.addEventListener("click", function(){
        displayDate();
        btn.addEventListener("click", displayDate);
    });
    tr.appendChild(btn);

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