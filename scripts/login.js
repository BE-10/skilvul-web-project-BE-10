const url = 'https://634811ba0484786c6e90f2f2.mockapi.io';
const loginForm = document.getElementById('login-form');

/* ------------ Get Mock Api ------------*/

async function getMockApi(url) {
    const response = await fetch(url);

    const result = response.json();

    return result;
}

/* ------------ End Get Mock Api ------------*/


/* ------------ User Login ------------*/

async function postMockApi(url, payload) {

    const loginResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(payload)
    });

    const result = loginResponse.json();

    return result;
}


loginForm.addEventListener('submit', function (e) {
    
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email)
    console.log(password)

    if (email && password) {

        getMockApi(`${url}/users`).then(function (users) {
            
            const isLoggedIn = users.find(function (user) {
                return user.email === email;
            });

            if (isLoggedIn) {
                if (isLoggedIn.password === password) {
                    localStorage.setItem('id', isLoggedIn.id);
                    window.location = 'index.html';
                } else {
                    alert('Email atau password anda salah!')
                }
            } else {
                alert('Email belum terdaftar!');
            }
        });
    }
});

/* ------------ End User Login ------------*/
