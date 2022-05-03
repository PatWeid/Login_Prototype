$("#dobAdd").datepicker();
$("#sex").attr('checked', 'checked');


function addStaff() {
    let staffID = document.getElementById('staffID');
    let id = staffID.value;
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

    let radio = document.getElementsByName('sex');

    for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            var gender = radio[i].value;
            break;
        }
    }

    let staff = new Object();
    staff.id = id;
    staff.firstName = firstName;
    staff.lastName = lastName;
    staff.dob = dob;
    staff.email = email;
    staff.gender = gender;

    allStaff.push(staff);

    $(document).ready($("#content").load("adminStaff.html"));
}


function cancelAddStaff() {
    $(document).ready($("#content").load("adminStaff.html"));
}