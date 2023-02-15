// this function grabs count of iphone from id and calculates the total price of iphones and updates it on the html
function updateIPhonePrice(){
    const priceIPhone=1219;
    let count=getValueOfInputById('count-iPhone');
    let priceIphoneTotal=calculatePrice(priceIPhone,count);
    setTextContentById(priceIphoneTotal,'price-iPhone');
    return priceIphoneTotal;
}

// this function grabs count of case from id and calculates the total price of cases and updates it on the html
function updateCasePrice(){
    const priceCase=59;
    let count=getValueOfInputById('count-case');
    let priceCaseTotal=calculatePrice(priceCase,count);
    setTextContentById(priceCaseTotal,'price-case');
    return priceCaseTotal;
}

//event delegation to update phone price whenever a click happens in container with the buttons
document.getElementById('container-cart-input-iPhone').addEventListener('click',function(){
    updateIPhonePrice();
    
});

document.getElementById('container-cart-input-case').addEventListener('click',function(){
        updateCasePrice();
})

