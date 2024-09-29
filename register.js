document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Store user data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now log in.');
    document.getElementById('register-form').reset();
    window.location.href = 'login.html'; // Redirect to login page
});
