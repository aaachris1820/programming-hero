//capture withdraw button and add an event listener to it

document.getElementById('button-withdraw').addEventListener('click',function() {
    //get current withdraw value, current balance value and input withdraw value in the website
        const currentWithdrawValue= getInnerTextValueById('total-withdraw');
        const currentBalanceValue=getInnerTextValueById('total-balance');
        const inputWithdraw= getInputValueById('input-withdraw');

        //error handling for negative number input or any other weird type
        if(inputWithdraw==false)
        {
            const errorMessage=document.getElementById('error-message');
            errorMessage.textContent='!!!Enter a positive amount of money';
            setTimeout(function (){
                errorMessage.textContent='';
            },2500);
        }

        //error handling of input if withdrawal amount is larger than total balance
        if(inputWithdraw>currentBalanceValue)
        {
            const errorMessage=document.getElementById('error-message');
            errorMessage.textContent='!!!Withdrawl amount of can not be more than total balance';
            setTimeout(function (){
                errorMessage.textContent='';
            },2500);
            
            return ;
        }
    
    //new withdraw value after adding the input withdraw from user
        const newWithdrawValue=currentWithdrawValue+inputWithdraw;
    //capture the total withdraw id element and update it with the new deposit value
        document.getElementById('total-withdraw').innerText=newWithdrawValue.toFixed(2);
    //new balance value after substracting the input withdraw value
        const newBalanceValue= currentBalanceValue-inputWithdraw;
    //capture the total balance element and update its text content with new balance value
        document.getElementById('total-balance').innerText=newBalanceValue.toFixed(2);
        
    
    });