
// Store User Data in JSON and Local Storage
function registerUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    const user = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password
    };

    // Store the user data in local storage
    localStorage.setItem(email, JSON.stringify(user));

    // Clear the registration form
    document.getElementById('registrationForm').reset();

    // Refresh the user table
    displayUsers();
}

//  Display Stored Values in Table Format
function displayUsers() {
    const table = document.getElementById('userTable');
    table.innerHTML = `
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Phone Number</th>
        </tr>
    `;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));

        table.innerHTML += `
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.phoneNumber}</td>
            </tr>
        `;
    }
}

// Initial display of stored users
displayUsers();

// User Login
function loginUser() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem(loginEmail));

    if (user && user.password === loginPassword) {
        alert('Login Successful');
    } else {
        alert('Login Failed. Please check your email and password.');
    }

    // Clear the login form
    document.getElementById('loginForm').reset();
}