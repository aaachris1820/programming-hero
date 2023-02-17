let cards=document.getElementsByClassName('cards-section');
let count=1;

for(let card of cards){
    card.addEventListener('click',function(e){
        if(e.target.classList.contains('btn')){
            let name=nameValue(e);
        let price=priceValue(e);
        let quantity= quantityValue(e);
        let total=price*quantity;
        e.target.setAttribute('disabled','true');
        setInnerHtmlById('table-body',`
                <td></td>
                <td>${count}</td>
                <td>${name}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${total}</td>
        `);
        setTextContentById('total-product',count)
        count++;
        }
    });
}

function nameValue(e){

    return e.target.parentNode.parentNode.children[0].textContent;
}

function priceValue(e){
    return parseInt(e.target.parentNode.parentNode.children[2].children[0].textContent);
}

function quantityValue(e){
    return parseInt(e.target.parentNode.parentNode.children[3].children[0].textContent);
}
