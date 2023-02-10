let paragraph1=document.getElementById('paragraph-1');
let sectionParagraphs=document.getElementById('section-paragraphs');

let inputText=document.getElementById('input-text');
inputText.addEventListener('keyup',function (){
    let inputValue= event.target.value;
    
    console.log(inputValue);
    paragraph1.innerText=inputValue;
    return paragraph1.innerText;
});

//button submit event to add the input as a new paragraph
let buttonSubmit=document.getElementById('button-submit');
console.log(buttonSubmit);
buttonSubmit.addEventListener('click', function (){

    let newParagraph=document.createElement('p');
    newParagraph.innerText=inputText.value;
    sectionParagraphs.appendChild(newParagraph);

});

let buttonReset=document.getElementById('button-reset');
buttonReset.onclick=function() {
    paragraph1.innerText='reset';
    paragraph1.style.color='blue';
    paragraph1.classList.add("hover");
}
