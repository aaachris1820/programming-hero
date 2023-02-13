//capture deposit button and add an event listener to it

document.getElementById('button-deposit').addEventListener('click',function() {
//get current deposit value, current balance value and input deposit value in the website
    const currentDepositValue= getInnerTextValueById('total-deposit');
    const currentBalanceValue=getInnerTextValueById('total-balance');
    const inputDeposit= getInputValueById('input-deposit');

//new deposit value after adding the input deposit from user
    const newDepositValue=currentDepositValue+inputDeposit;
//capture the total deposit element and update it with the new deposit value
    document.getElementById('total-deposit').innerText=newDepositValue.toFixed(2);
//new balance value after adding the input deposit value
    const newBalanceValue= currentBalanceValue+inputDeposit;
//capture the total balance element and update its text content with new balance value
    document.getElementById('total-balance').innerText=newBalanceValue.toFixed(2);
    

});