function addStudent() {
    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const course = document.getElementById("course").value;

    if (name === "" || rollNo === "" || course === "") {
        alert("Please fill all fields.");
        return;
    }

    const table = document.getElementById("studentList");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${rollNo}</td>
        <td>${name}</td>
        <td>${course}</td>
        <td>
            <button class="delete-btn" onclick="deleteStudent(this)">
                Delete
            </button>
        </td>
    `;

    table.appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(button) {
    button.parentElement.parentElement.remove();
}