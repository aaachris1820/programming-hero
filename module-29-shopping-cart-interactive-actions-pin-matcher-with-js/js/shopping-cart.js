// adding an event listener to the plus minus button on the shopping cart of iPhone

document.getElementById('container-cart-input-iPhone').addEventListener('click',function(e){

    
    if(e.target.classList.contains('fa-minus')||e.target.classList.contains('btn-minus'))
    {
        let countIPhone=getValueOfInputById('count-iPhone');
        if (countIPhone>0) {
            countIPhone--;
        }
        
        setInputValueById(countIPhone,'count-iPhone')
    }
    else if(e.target.classList.contains('fa-plus')||e.target.classList.contains('btn-plus')){
        let countIPhone=getValueOfInputById('count-iPhone');
        countIPhone++;
        
        setInputValueById(countIPhone,'count-iPhone')
    }
});

//adding an event listener to the plus minus button on the shopping cart of iPhone case

document.getElementById('container-cart-input-case').addEventListener('click',function(e){

    
    if(e.target.classList.contains('fa-minus')||e.target.classList.contains('btn-minus'))
    {
        let countIPhone=getValueOfInputById('count-case');
        if (countIPhone>0) {
            countIPhone--;
        }
        
        setInputValueById(countIPhone,'count-case')
    }
    else if(e.target.classList.contains('fa-plus')||e.target.classList.contains('btn-plus')){
        let countIPhone=getValueOfInputById('count-case');
        countIPhone++;
        
        setInputValueById(countIPhone,'count-case')
    }
});
