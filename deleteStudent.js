function deleteStudent() {
    let studentId = document.getElementById('studentID').value;
    if (idIsKnown(studentId)) {
        let deletePosition = getDeletePosition(studentId);

        let newAllStudents = [];

        for (let i = 0; i<allStudents.length; i++) {
            if (i === deletePosition) {
                continue;
            }
            newAllStudents.push(allStudents[i]);
        }
        allStudents = newAllStudents;
        $(document).ready($("#content").load("adminStudents.html"));
    } else {
        alert('unknown ID');
    }
}

function cancelDeleteStudent() {
    $(document).ready($("#content").load("adminStudents.html"));
}

function idIsKnown(id) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i].id === id) {
            return true;
        }
    }
    return false;
}

function getDeletePosition(id) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i].id === id) {
            return i;
        }
    }
    return -1;
}