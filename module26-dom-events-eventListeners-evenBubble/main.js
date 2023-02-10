let paragraph1=document.getElementById('paragraph-1');
let inputText=document.getElementById('input-text');
inputText.addEventListener('keyup',function(){
    let inputValue= event.target.value;
    console.log(inputValue);
    paragraph1.innerText=inputValue;
});

let buttonReset=document.getElementById('button-reset');
buttonReset.onclick=function() {
    paragraph1.innerText='reset';
    paragraph1.style.color='blue';
    paragraph1.classList.add("hover");
}
