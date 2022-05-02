function deleteStaff() {
    let staffId = document.getElementById('staffID').value;
    if (idIsKnown(staffId)) {
        let deletePosition = getDeletePosition(staffId);

        let newAllStaff = [];

        for (let i = 0; i<allStaff.length; i++) {
            if (i === deletePosition) {
                continue;
            }
            newAllStaff.push(allStaff[i]);
        }
        allStaff = newAllStaff;
        $(document).ready($("#content").load("adminStaff.html"));
    } else {
        alert('unknown ID');
    }
}

function cancelDeleteStaff() {
    $(document).ready($("#content").load("adminStaff.html"));
}

function idIsKnown(id) {
    for (let i = 0; i < allStaff.length; i++) {
        if (allStaff[i].id === id) {
            return true;
        }
    }
    return false;
}

function getDeletePosition(id) {
    for (let i = 0; i < allStaff.length; i++) {
        if (allStaff[i].id === id) {
            return i;
        }
    }
    return -1;
}