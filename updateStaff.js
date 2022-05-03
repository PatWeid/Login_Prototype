$( "#dobUpdate" ).datepicker();

function idIsKnown(id) {
    for (let i = 0; i < allStaff.length; i++) {
        if (allStaff[i].id === id) {
            return true;
        }
    }
    return false;
}

function getUpdatePosition(id) {
    for (let i = 0; i < allStaff.length; i++) {
        if (allStaff[i].id === id) {
            return i;
        }
    }
    return -1;
}

function updateStaff() {
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

    let dob = document.getElementById('dobUpdate').value;

    let email = document.getElementById('email').value;
    if (email === "") {
        alert('Please add email');
        return;
    }

    let radio = document.getElementsByName('sex');

    let gender;
    for (let i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            gender = radio[i].value;
            break;
        }
    }

    if (idIsKnown(id)) {
        let updatePosition = getUpdatePosition(id);
        let staff = allStaff[updatePosition];
        staff.id = id;
        staff.firstName = firstName;
        staff.lastName = lastName;
        staff.dob = dob;
        staff.email = email;
        staff.gender = gender;

        $(document).ready($("#content").load("adminStaff.html"));
    } else {
        alert('unknown staff');
    }
}

function cancelUpdateStaff() {
    $(document).ready($("#content").load("adminStaff.html"));
}
