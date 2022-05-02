table = document.getElementById('table');

for (let i = 0; i < allCourses.length; i++) {

    tr = table.insertRow(); // Create a new row.
    let tabCell = tr.insertCell();
    tabCell.innerHTML = allCourses[i];

    let btn = document.createElement("button");
    btn.innerHTML = "Show Students";
    btn.addEventListener("click", function(){
        showStudents(allCourses[i]);
    });
    tr.appendChild(btn);
}

function showStudents(course) {
    table = document.getElementById('tableStudents');
    table.innerHTML="";
    let studentsFromCourse = getStudentsForCourse(course);

    for (let i = 0; i < studentsFromCourse.length; i++) {

        tr = table.insertRow(); // Create a new row.
        let tabCell = tr.insertCell();
        tabCell.innerHTML = studentsFromCourse[i].id;

        tabCell = tr.insertCell();
        tabCell.innerHTML = studentsFromCourse[i].firstName;

        tabCell = tr.insertCell();
        tabCell.innerHTML = studentsFromCourse[i].lastName;

        tabCell = tr.insertCell();
        tabCell.innerHTML = studentsFromCourse[i].dob;

        tabCell = tr.insertCell();
        tabCell.innerHTML = studentsFromCourse[i].email;

        tabCell = tr.insertCell();
        tabCell.innerHTML = studentsFromCourse[i].department;

        tabCell = tr.insertCell();
        tabCell.innerHTML = studentsFromCourse[i].semester;

        tabCell = tr.insertCell();
        tabCell.innerHTML = studentsFromCourse[i].gender;
    }
}

function getStudentsForCourse(course) {
    let studentsFromCourse = [];
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i].department === course) {
            studentsFromCourse.push(allStudents[i]);
        }
    }
    return studentsFromCourse;
}