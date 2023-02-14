function getTextContentIntegerValueById(idName){
    const integerValueOfId=parseInt(document.getElementById(idName).textContent);
    return integerValueOfId;
}

function getInputValueById(idName){
    const inputValue=document.getElementById(idName).value;
    return inputValue;
}