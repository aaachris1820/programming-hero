let inputEmail=document.getElementById('input-email');
let inputPassword=document.getElementById('input-password');


document.getElementById('button-submit').addEventListener('click',function () {

    if(inputEmail.value=='hello@gmail.com' && inputPassword.value=='hello')
        window.location.href='bank-interface.html';
    else
        alert('Wrong email or password.');
});