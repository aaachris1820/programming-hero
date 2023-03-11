//global variable to contain count number
let count;

//function to capture html element by id
const captureElementById=(idName)=> document.getElementById(idName);

//capturing html elements to variables
const showCountValue=captureElementById('show-count-value');
const btnIncrease=captureElementById('btn-increase');
userInput=captureElementById('input-user');
btnSubmit=captureElementById('btn-submit');

//function to set innerText of an html element
const setInnerTextByVariable=(variableName,value)=>variableName.innerText=value;

//function to get value from an input field
const getValueByVariable=(variableName)=>variableName.value;

//function to get localstorage count value if it exists,else create a count item with value 0 in localstorage and assign parsed int value of localstorage to count variable
const getSetLocalStorageCounter=()=>{
    if(localStorage.getItem('count')){
        count=localStorage.getItem('count');
        setInnerTextByVariable(showCountValue,count);
    }
    else{
        localStorage.setItem('count','0');
        count=parseInt(localStorage.getItem('count'));
    }
}
//calling the function to update count value when website is loaded
getSetLocalStorageCounter();

//increase button event listener
btnIncrease.addEventListener('click', ()=>{

    setInnerTextByVariable(showCountValue,++count);
    localStorage.setItem('count',count);
});

//submit button event listner
btnSubmit.addEventListener('click',()=>{
    
    const inputValue=getValueByVariable(userInput);
    userInput.value='';
    if (inputValue==''){
        alert('!!!Enter a number please');
        return;
    }
    else if(isNaN(inputValue)){
        alert('!!!Enter a number please');
        return;
    }

    setInnerTextByVariable(showCountValue,inputValue);
    localStorage.setItem('count',inputValue);
    getSetLocalStorageCounter();

});


