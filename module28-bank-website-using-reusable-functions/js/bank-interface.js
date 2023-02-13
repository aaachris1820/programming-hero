// capture input or textarea id and get the value by this function by giving the id string as input

function getValueOfInputById(idName) {

    const valueOfId= document.getElementById(idName).value;
    if(parseFloat(valueOfId)>=0)
        return parseFloat(valueOfId);
    else
        alert('enter a positive number')
}

//capture elements by id and get the inner text content by giving the id string as input

function getInnerTextValueById(idName){

    const innerTextOfId= document.getElementById(idName).innerText;
    if(parseFloat(innerTextOfId))
        return parseFloat(innerTextOfId);
}

// 

