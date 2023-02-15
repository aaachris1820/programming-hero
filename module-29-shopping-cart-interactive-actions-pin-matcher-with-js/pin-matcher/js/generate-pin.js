// generates a random six digit pin using math random function
function generatePin(){
    const randomPin=Math.floor(Math.random()*899999+100000)
    return randomPin;
}

document.getElementById('btn-generate').addEventListener('click',function(){
    const generatedPinNumber=generatePin();
    setInputValueById(generatedPinNumber,'input-random');
})