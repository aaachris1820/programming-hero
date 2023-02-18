/*=====================================
=======================================
Random color event listener code section
=======================================
======================================= */

//grab all cards with card class name to get a HTMLCollection

const cards=document.getElementsByClassName('card');

//now loop it to add a event listener to change background color when mouse enters the card div

for(let card of cards){

    card.addEventListener('mouseenter', function(){
        card.style.backgroundColor=randomColorGenerator();
    });
}