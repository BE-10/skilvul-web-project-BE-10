/* User Regis*/

const url = 'https://634811ba0484786c6e90f2f2.mockapi.io';
const regisForm = document.getElementById('regis-form');

async function getMockApi(url) {
    const response = await fetch(url);

    const result = response.json();

    return result;
}

async function postMockApi(url, payload) {
    const regisResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(payload)
    });

    const result = regisResponse.json();

    return result;
}

regisForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        getMockApi(`${url}/users`).then(function(users) {
            const isUserExists = users.find(function(user) {
                return user.email === email;
            });

            if (isUserExists) {
                alert('Email atau username sudah dipakai!');
            } else {
                postMockApi(`${url}/users`, {
                    name,
                    email,
                    password,
                })
                .then((result) => {
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('password').value = '';
        
                    window.location = 'login.html';
                })
            }
        });
    }
});