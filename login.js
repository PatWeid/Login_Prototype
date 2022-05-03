var allStudents = [];
var allStaff = [];
var allCourses = ["Computer Science", "Mathematics", "Engineering"];

let student = new Object();
student.id = '1000';
student.firstName = 'Katarina';
student.lastName = 'Weber';
student.dob = '30/04/1995';
student.email = 'katarina@weber.com';
student.department = 'Mathematics';
student.semester = '7';
student.gender = 'female';

allStudents.push(student);


student = new Object();
student.id = '9000';
student.firstName = 'Diego';
student.lastName = 'Fernandez';
student.dob = '30/04/2002';
student.email = 'diego@fernandez.com';
student.department = 'Computer Science';
student.semester = '1';
student.gender = 'male';

allStudents.push(student);

let staff = new Object();
staff.id = '1984';
staff.firstName = 'Marie';
staff.lastName = 'Curie';
staff.dob = '06/04/1934';
staff.email = 'marie@curie.com';
staff.gender = 'female';

allStaff.push(staff);

let loginCount = 2;

let adminButton = document.getElementById('adminButton');
let staffButton = document.getElementById('staffButton');

function adminLogin() {
    let adminUsername = document.getElementById('adminUsername').value;
    let adminPassword = document.getElementById('adminPassword').value;

    if (adminUsername === 'Admin' && adminPassword === 'Admin') {
        loadAdminpage();
    } else {
        invalidLogin();
    }
}

function staffLogin() {
    let staffUsername = document.getElementById('staffUsername').value;
    let staffPassword = document.getElementById('staffPassword').value;

    if (staffUsername === 'Staff' && staffPassword === 'Staff') {
        loadStaffpage();
    } else {
        invalidLogin();
    }
}

function loadAdminpage() {
    $(document).ready($("#content").load("admin.html"));
}

function loadStaffpage() {
    $(document).ready($("#content").load("staff.html"));
}

function invalidLogin() {
    if (loginCount === 0) {
        alert('Login disabled');
        adminButton.disabled = true;
        staffButton.disabled = true;
    } else {
        alert('incorrect - ' + loginCount + ' more tries');
        loginCount--;
    }
}
