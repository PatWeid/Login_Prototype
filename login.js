var allStudents = [];
var allStaff = [];
var allCourses = ["Computer Science", "Mathematics", "Engineering"];

let student = new Object();
student.id = '100';
student.firstName = 'Sepp';
student.lastName = 'Huber';
student.dob = 'DOB';
student.email = 'seppl@gmail.com';
student.department = 'Mathematics';
student.semester = '7';
student.gender = 'male';

allStudents.push(student);


student = new Object();
student.id = '9000';
student.firstName = 'Patrick';
student.lastName = 'Weidmüller';
student.dob = 'DOB';
student.email = 'patrick.weidmueller@gmail.com';
student.department = 'Computer Science';
student.semester = '7';
student.gender = 'male';

allStudents.push(student);

let staff = new Object();
staff.id = '9000';
staff.firstName = 'Patrick';
staff.lastName = 'Weidmüller';
staff.dob = 'DOB';
staff.email = 'patrick.weidmueller@gmail.com';
staff.gender = 'male';

allStaff.push(staff);

let loginCount = 2;

let adminButton = document.getElementById('adminButton');
let staffButton = document.getElementById('staffButton');

function adminLogin() {
    let adminUsername = document.getElementById('adminUsername').value;
    let adminPassword = document.getElementById('adminPassword').value;

    if (adminUsername === 'Admin' && adminPassword === 'Admin') {
        invalidLogin();
    } else {
        loadAdminpage();
    }
}

function staffLogin() {
    let infoMessage = document.getElementById('infoMessage');
    let staffUsername = document.getElementById('staffUsername').value;
    let staffPassword = document.getElementById('staffPassword').value;

    if (staffUsername === 'Staff' && staffPassword === 'Staff') {
        invalidLogin();
    } else {
        loadStaffpage();
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
