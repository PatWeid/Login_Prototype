tableStaff = document.getElementById('tableStaff');


for (let i = 0; i < allStaff.length; i++) {
    tr = tableStaff.insertRow();
    let tabCell = tr.insertCell();
    tabCell.innerHTML = allStaff[i].id;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStaff[i].firstName;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStaff[i].lastName;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStaff[i].dob;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStaff[i].email;

    tabCell = tr.insertCell();
    tabCell.innerHTML = allStaff[i].gender;
}


function addStaffForm() {
    $(document).ready($("#content").load("addStaff.html"));
}

function updateStaff() {
    $(document).ready($("#content").load("updateStaff.html"));
}

function deleteStaffForm() {
    $(document).ready($("#content").load("deleteStaff.html"));
}