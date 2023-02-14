document.getElementById('button-submit').addEventListener('click',function () {

    
    const inputCoupon=getInputValueById('input-coupon');
    const discount=30/100;
    const price=getTextContentIntegerValueById('price');

    if(inputCoupon==='123'){
        const discountedPrice=price-price*discount;
        let newParagraphElement=document.createElement('p');
        newParagraphElement.setAttribute('class','font-medium');
        newParagraphElement.textContent='Your discounted price is '+discountedPrice+'$';
        document.getElementById('container-price').appendChild(newParagraphElement);
    }
    else 
        alert('enter correct coupon code');
    
    

});
