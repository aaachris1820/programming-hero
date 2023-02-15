// this function takes input element id name with strings and return their value in integer number format

function getValueOfInputById(idName) {
    let inputStringValue=document.getElementById(idName).value;
    return parseInt(inputStringValue);
}

// this function takes value you want to set on an element and the idname of the element and updates the textcontent of it by the value given

function setTextContentById(valueNumber,idName) {
    document.getElementById(idName).textContent=valueNumber;
}

// this function takes value you want to set on an input element and the idname of the element and updates the value of it by the value given

function setInputValueById(valueNumber,idName) {
    document.getElementById(idName).value=valueNumber;
}

//this function caluculate price based on the number of items on the cart
function calculatePrice(count,price){
    return count*price;
}