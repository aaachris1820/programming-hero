document.getElementById('btn-save').addEventListener('click',function() {

    const balance=getTextContentIntegerValueById('balance');
    
    const save=(getInputIntegerValueById('input-save')/100)*balance;

    setTextContentById('saving-amount',save+' $');

    const remainingBalance=balance-save;

    setTextContentById('remaining-balance',remainingBalance+' $');

});