//add event listener to the calculator body, first get the value of user input,then get the inner text of the event target element,if the element inner text is not a NaN and input length is less than 6 we add the number to the user input as string

document.getElementById('calculator').addEventListener('click',function(e){

    let pinNumber=document.getElementById('input-user').value;
    const number=e.target.innerText;

    if(!isNaN(number) && pinNumber.length<6)
    {
        pinNumber+=number;
        setInputValueById(pinNumber,'input-user');
    }
    else if(number=='<')
        {
            const newPinNumber=pinNumber.slice(0,-1);
            setInputValueById(newPinNumber,'input-user');
        }
    else if(number=='C')
    {
        setInputValueById('','input-user')
    }
    
});
