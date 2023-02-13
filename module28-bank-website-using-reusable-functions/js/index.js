document.getElementById('button-submit').addEventListener('click',function() {

    const inputEmail=document.getElementById('input-email').value;
    const inputPassword=document.getElementById('input-password').value;

    if(inputEmail=='hello@gmail.com' && inputPassword=='hello')
        window.location.href='bank-interface.html'
});