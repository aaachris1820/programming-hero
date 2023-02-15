document.getElementById('btn-submit').addEventListener('click',function(){
    const inputUserPin=document.getElementById('input-user').value;
    const generatedPin=document.getElementById('input-random').value;
    let countTries=parseInt(document.getElementById('count-tries').textContent);

    

    if(inputUserPin==generatedPin && inputUserPin!='')
    {
        document.getElementById('success-message').classList.remove('d-none');
        document.getElementById('error-message').classList.add('d-none');
    }
    else
    {
        document.getElementById('error-message').classList.remove('d-none');
        document.getElementById('success-message').classList.add('d-none');

        if(countTries>0)
        {
            countTries--;
            setTextContentById(countTries,'count-tries');
            if(countTries==0)
                document.getElementById('btn-submit').disabled=true;
            
        }
    }

});