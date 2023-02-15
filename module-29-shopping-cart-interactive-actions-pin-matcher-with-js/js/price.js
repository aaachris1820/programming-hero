//event delegation to update phone price whenever a click happens in container with the buttons
document.getElementById('container-cart-input-iPhone').addEventListener('click',function(){
    updateIPhonePrice();
    
});

document.getElementById('container-cart-input-case').addEventListener('click',function(){
        updateCasePrice();
})

function updateIPhonePrice(){
    const priceIPhone=1219;
    let count=getValueOfInputById('count-iPhone');
    let priceIphoneTotal=calculatePrice(priceIPhone,count);
    setTextContentById(priceIphoneTotal,'price-iPhone');
    return priceIphoneTotal;
}

function updateCasePrice(){
    const priceCase=59;
    let count=getValueOfInputById('count-case');
    let priceCaseTotal=calculatePrice(priceCase,count);
    setTextContentById(priceCaseTotal,'price-case');
    return priceCaseTotal
}