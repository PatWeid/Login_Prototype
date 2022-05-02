$( "#dobAdd" ).datepicker();
$("#sex").attr('checked', 'checked');



function addStudent() {
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

    let dob = document.getElementById('dobAdd').value;

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

    for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            var gender = radio[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    let student = new Object();
    student.id = id;
    student.firstName = firstName;
    student.lastName = lastName;
    student.dob = dob;
    student.email = email;
    student.department = department;
    student.semester = semester;
    student.gender = gender;

    allStudents.push(student);

    $(document).ready($("#content").load("adminStudents.html"));
}


function cancelAddStudent() {
    $(document).ready($("#content").load("adminStudents.html"));
}