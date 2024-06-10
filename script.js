document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.querySelector('.form-container');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const loader = document.getElementById('loader');

    function toggleForm() {
        formContainer.style.transform = formContainer.style.transform === 'translateX(-50%)' ? 'translateX(0)' : 'translateX(-50%)';
    }

    window.toggleForm = toggleForm;

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const mobile = document.getElementById('signup-mobile').value;
        const password = document.getElementById('signup-password').value;
        const gender = document.getElementById('signup-gender').value;

        
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the user already exists
        if (users.some(user => user.username === username)) {
            alert('User already has an account. Redirecting to login.');
            toggleForm();
        } else {
            // Add new user to the users array
            const newUser = { username, mobile, password, gender };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            console.log('Registered Users:', users);

            alert('Signup successful! Redirecting to login.');
            toggleForm();
        }
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        
        const users = JSON.parse(localStorage.getItem('users')) || [];

        
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            console.log('Login successful for user:', user);

            
            loader.style.display = 'flex';

            
            setTimeout(function () {
                window.location.href = 'home.html';
            }, 2000);
        } else {
            alert('Invalid username or password');
        }
    });
});
