const buttonLogin = document.querySelector('.btn-login');

/* ------------ Page After User Login ------------*/

/* ----- Create Logout Button ----- */

const buttonLogout = document.createElement('a');
buttonLogout.className = "btn-logout";
buttonLogout.href = "#";
buttonLogout.innerText = 'Logout';

const btnLogout = document.querySelector('#btn-decision').appendChild(buttonLogout);

/* ----- End Create Logout Button ----- */


const getIdUser = localStorage.getItem('id');

if (getIdUser) {
    buttonLogin.style.display = 'none';
} else {
    buttonLogin.style.display = 'block';
    btnLogout.style.display = 'none';
}

btnLogout.addEventListener('click', function(e) {
    e.preventDefault();

    localStorage.removeItem('id');

    window.location = 'index.html';
});

/* ------------ End Page After User Login ------------*/