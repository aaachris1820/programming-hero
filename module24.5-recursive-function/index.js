let result=document.querySelector('.result');
let number1=document.querySelector('#number1');
let number2=document.querySelector('#number2');
let buttonSum=document.querySelector('.add');
console.log(number1.textContent);
let buttonReset=document.querySelector(".reset");

// number1.addEventListener("input",function(){
//     let value1=parseInt(input1.value);
// })
buttonSum.addEventListener('click', function() {
    let value1=parseInt(number1.value);
    let value2=parseInt(number2.value);
    
    
    if(number1.value!='' && number2.value!='')
        result.textContent=`The Sum of the two number is ${value1+value2}`;
    
    else
        result.textContent=`Please enter two numbers`
});

buttonReset.addEventListener('click', function(){
    number1.value='';
    number2.value='';
})