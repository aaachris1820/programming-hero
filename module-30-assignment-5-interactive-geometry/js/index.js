/* 
    adding event listener to blog button
    that will take user to blog.html
*/

document.getElementById('btn-blog').addEventListener('click', function(){

    window.location.href='blog.html';
})

/* this function will take id name of an input field and return -1 for an error or the float converted value if a number */

function getInputFloatValueById(idName){
    const stringValue=document.getElementById(idName).value;
    const numberValue=parseFloat(stringValue);

    if(isNaN(stringValue))
        return -1;
    else if(numberValue<0)
        return -1;
    else
        return numberValue;

}

/* this function will take count, name and area value as input and add them as a row in area container section of the html, styles added as needed */

function setInnerHTMLInAreaContainer(count,name,areaValue){
    const container=document.getElementById('area-container');
    
    const newRow=document.createElement('div');
    newRow.setAttribute('class', 'flex flex-wrap gap-y-4 justify-around gap-x-4 justify-items-start mb-4 items-center');
    newRow.innerHTML=`
    
        <p>${count}. ${name}</p>
        <p class="text-center">${areaValue}cm<sup>2</sup></p>
        <button class="px-2 py-2 text-white rounded-lg bg-primary font-bold button">Convert to m<sup>2</sup></button>

    `;

    container.appendChild(newRow);

};

// this function will generate a random color in rgb(red,green,blue) format

function randomColorGenerator(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return 'rgb'+'('+r+','+g+','+b+')';
}