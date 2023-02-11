//setting all h2 element color to blue

let h2=document.getElementsByTagName('h2');
for(heading of h2){
    heading.style.color='blue';
}

//set background color to tomato for a section with backpack id

document.getElementById('backpack').style.backgroundColor='tomato';

//change border radius of all card class to 30px

let cards=document.getElementsByClassName('card');
for (card of cards){
    card.style.borderRadius='30px';
}

//write a function with a console log and add it as a click handler on a button anywhere

function clickHandlerForConsoleLog () {
    console.log('click handled');
}
document.getElementById('button-banner-buy-now').onclick=clickHandlerForConsoleLog;


//