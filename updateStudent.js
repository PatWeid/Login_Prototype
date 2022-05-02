$( "#dobUpdate" ).datepicker();

function idIsKnown(id) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i].id === id) {
            return true;
        }
    }
    return false;
}

function getUpdatePosition(id) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i].id === id) {
            return i;
        }
    }
    return -1;
}

function updateStudent() {

    let studentID = document.getElementById('studentID');
    let id = studentID.value;
    if (id === "") {
        alert('Please add id');
        return;
    }

    let firstName = document.getElementById('firstName').value;
    if (firstName === "") {
        alert('Please add firstname');
        return;
    }

    let lastName = document.getElementById('lastName').value;

    let dob = document.getElementById('dobUpdate').value;

    let email = document.getElementById('email').value;
    if (email === "") {
        alert('Please add email');
        return;
    }

    let departmentSelect = document.getElementById('departmentSelect');
    let department = departmentSelect.options[departmentSelect.selectedIndex].value;
    if (department === "") {
        alert('Please choose department');
        return;
    }

    let semesterSelect = document.getElementById('semesterSelect');
    let semester = semesterSelect.options[semesterSelect.selectedIndex].value;

    let radio = document.getElementsByName('sex');

    let gender;
    for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            gender = radio[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if (idIsKnown(id)) {
        let updatePosition = getUpdatePosition(id);
        let student = allStudents[updatePosition];
        student.id = id;
        student.firstName = firstName;
        student.lastName = lastName;
        student.dob = dob;
        student.email = email;
        student.department = department;
        student.semester = semester;
        student.gender = gender;

        $(document).ready($("#content").load("adminStudents.html"));
    } else {
        alert('unknown student');
    }
}

function cancelUpdateStudent() {
    $(document).ready($("#content").load("adminStudents.html"));
}