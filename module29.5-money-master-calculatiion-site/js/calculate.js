document.getElementById('btn-calculate').addEventListener('click', balanceExpenseCalculator);

function balanceExpenseCalculator(){

    const income=getInputIntegerValueById('input-income');

    const totalExpense=expenseCalculator('input-food','input-rent','input-clothes');

    setTextContentById('expense-total',totalExpense+' $')

    const balance=balanceCalculator(income,totalExpense);

    setTextContentById('balance',balance+' $');
    return balance;

}

function expenseCalculator(idNamefood,idNameRent,idNameClothes){
    const foodExpense=getInputIntegerValueById(idNamefood);
    const rentExpense=getInputIntegerValueById(idNameRent);
    const clothesExpense=getInputIntegerValueById(idNameClothes);
    return foodExpense+rentExpense+clothesExpense;
}

function balanceCalculator(incomeValue,expenseValue){
    return incomeValue>=expenseValue?incomeValue-expenseValue: alert('!!! Expense can not be greater than income');
}