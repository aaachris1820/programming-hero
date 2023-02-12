//caputure both deposit and withdraw totals value and string
let totalDeposit=document.getElementById('total-deposit');
let totalDepositValue=parseFloat(document.getElementById('total-deposit').textContent);

let totalWithdraw=document.getElementById('total-withdraw');
let totalWithdrawValue=parseFloat(document.getElementById('total-withdraw').textContent);



//capture balance total and value
let totalBalance=document.getElementById('total-balance');
let totalBalanceValue=parseFloat(document.getElementById('total-balance').textContent);

console.log(totalBalance,totalDeposit,totalWithdraw);

// deposit button event listener
document.getElementById('button-deposit').addEventListener('click', function () {
    let inputDepositValue=parseFloat(document.getElementById('input-deposit').value);

    if(inputDepositValue>=0) {
        //update totalbalance and totaldeposit value
        totalBalanceValue+=inputDepositValue;
        totalDepositValue+=inputDepositValue
        //update totalbalance and totaldeposit textcontent in html
        totalBalance.textContent=totalBalanceValue;
        totalDeposit.textContent=totalDepositValue;

        

        console.log(inputDepositValue,totalDepositValue,totalBalanceValue);
    }
    
});

// withdraw button event listener
document.getElementById('button-withdraw').addEventListener('click', function () {
    //capture input withdraw value
    let inputWithdrawValue=parseFloat(document.getElementById('input-withdraw').value);
    console.log(inputWithdrawValue);
    if (inputWithdrawValue>=0) {
    //update totalbalance and totalwithdraw value
    totalBalanceValue-=inputWithdrawValue;
    totalWithdrawValue+=inputWithdrawValue
    //update totalbalance and totaldeposit textcontent in html
    totalBalance.textContent=totalBalanceValue;
    totalWithdraw.textContent=totalWithdrawValue;

    

    console.log(inputWithdrawValue,totalWithdrawValue,totalBalanceValue);
    }
    

});