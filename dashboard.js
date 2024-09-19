let employees = [
    { name: 'John Doe', position: 'Manager', email: 'john.doe@example.com' },
    { name: 'Jane Smith', position: 'Developer', email: 'jane.smith@example.com' }
];

// Load employees into the table
function loadEmployees() {
    const tableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.email}</td>
        `;
    });
}

// Add employee from the form
if (document.getElementById('employeeForm')) {
    document.getElementById('employeeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const email = document.getElementById('email').value;

        if (name && position && email) {
            employees.push({ name, position, email });
            alert('Employee added successfully');
            window.location.href = "view-employees.html";
        }
    });
}

// Load employees on the View Employees page
if (document.getElementById('employeeTable')) {
    loadEmployees();
}
