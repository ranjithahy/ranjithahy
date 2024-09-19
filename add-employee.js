document.addEventListener("DOMContentLoaded", function () {
    const addEmployeeForm = document.getElementById("addEmployeeForm");

    if (addEmployeeForm) {
        addEmployeeForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mobile = document.getElementById("mobile").value.trim();
            const designation = document.getElementById("designation").value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const course = document.getElementById("course").value.trim();
            const imageFile = document.getElementById("image").files[0];

            // Validation flags
            let isValid = true;
            let errorMessage = '';

            // Name validation
            if (name === '') {
                errorMessage += 'Name is required.\n';
                isValid = false;
            }

            // Email validation (format and duplicate check)
            if (!validateEmail(email)) {
                errorMessage += 'Invalid email format.\n';
                isValid = false;
            } else if (isDuplicateEmail(email)) {
                errorMessage += 'This email is already registered.\n';
                isValid = false;
            }

            // Mobile validation (numeric and length)
            if (!/^\d{10}$/.test(mobile)) {
                errorMessage += 'Mobile number must be 10 digits.\n';
                isValid = false;
            }

            // Designation validation
            if (designation === null || designation === '') {
                errorMessage += 'Designation is required.\n';
                isValid = false;
            }

            // Gender validation
            if (!gender) {
                errorMessage += 'Gender selection is required.\n';
                isValid = false;
            }

            // Course validation
            if (course === '') {
                errorMessage += 'Course is required.\n';
                isValid = false;
            }

            // Image validation (jpg or png)
            if (!imageFile || !validateImage(imageFile)) {
                errorMessage += 'Please upload a valid image (jpg or png).\n';
                isValid = false;
            }

            if (!isValid) {
                alert(errorMessage);
                return;
            }

            // Create employee object
            const employee = {
                name,
                email,
                mobile,
                designation,
                gender,
                course,
                imageFile: imageFile.name // Only storing the image file name for now
            };

            // Store employee in localStorage
            const employeeList = JSON.parse(localStorage.getItem("employees")) || [];
            employeeList.push(employee);
            localStorage.setItem("employees", JSON.stringify(employeeList));

            // Redirect to employee list page or show a success message
            alert("Employee added successfully!");
            window.location.href = "dashboard.html"; // Redirect to dashboard or employee list page
        });
    }

    // Validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Check if email already exists
    function isDuplicateEmail(email) {
        const employeeList = JSON.parse(localStorage.getItem("employees")) || [];
        return employeeList.some(employee => employee.email === email);
    }

    // Validate image file type (only jpg and png allowed)
    function validateImage(imageFile) {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        return allowedExtensions.test(imageFile.name);
    }
});
