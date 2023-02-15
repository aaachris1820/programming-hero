document.getElementById('btn-submit').addEventListener('click',function(){
    const inputUserPin=document.getElementById('input-user').value;
    const generatedPin=document.getElementById('input-random').value;

    if(inputUserPin==generatedPin)
    {
        document.getElementById('success-message').classList.remove('d-none');
        document.getElementById('error-message').classList.add('d-none');
    }
    else
    {
        document.getElementById('error-message').classList.remove('d-none');
        document.getElementById('success-message').classList.add('d-none');
    }

});