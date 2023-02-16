function setTextContentById(idName,numberValue){
    document.getElementById(idName).textContent=numberValue;
}

function getInputIntegerValueById(idName){

    const integerValue=parseInt(document.getElementById(idName).value);

    return isNaN(integerValue)?false:integerValue;
}

function getTextContentIntegerValueById(idName){

    const integerValue=parseInt(document.getElementById(idName).textContent);

    return isNaN(integerValue)?false:integerValue;
}