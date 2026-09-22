function showMessage() {
    const message = document.getElementById("message");

    message.textContent =
        "Student records are up to date. Attendance data has been verified.";
}

function registerStudent() {
    const name = document.getElementById("studentName").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const course = document.getElementById("course").value;
    const message = document.getElementById("registrationMessage");

    if (name === "" || rollNumber === "" || course === "") {
        message.textContent = "Please fill in all student details.";
        return;
    }

    message.textContent =
        "Student " + name + " has been registered successfully.";
}