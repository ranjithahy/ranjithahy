document.addEventListener("DOMContentLoaded", function () {
    const employeeTableBody = document.querySelector("#employeeTable tbody");

    // Fetch employee data from localStorage
    const employeeList = JSON.parse(localStorage.getItem("employees")) || [];

    // Populate the table
    employeeList.forEach((employee, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${employee.imageFile}" alt="${employee.name}"></td>
            <td>${employee.name}</td>
            <td>${employee.mobile}</td>
            <td>${employee.designation}</td>
            <td>${employee.gender}</td>
            <td>${employee.course}</td>
            <td>${employee.createdDate || new Date().toLocaleDateString()}</td>
            <td class="action-buttons">
                <button class="edit-button" onclick="editEmployee(${index})">Edit</button>
                <button class="delete-button" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;

        employeeTableBody.appendChild(row);
    });

    // Edit employee function
    window.editEmployee = function (index) {
        // Implement edit functionality
        alert(`Edit employee with ID: ${index + 1}`);
    };

    // Delete employee function
    window.deleteEmployee = function (index) {
        if (confirm("Are you sure you want to delete this employee?")) {
            const employeeList = JSON.parse(localStorage.getItem("employees")) || [];
            employeeList.splice(index, 1);
            localStorage.setItem("employees", JSON.stringify(employeeList));
            location.reload(); // Reload the page to reflect changes
        }
    };
});
