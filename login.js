document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('secured-page').style.display = 'block';
        document.getElementById('welcome-username').innerText = username;
    } else {
        alert('Invalid username or password.');
    }

    document.getElementById('login-form').reset();
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('secured-page').style.display = 'none';
});
