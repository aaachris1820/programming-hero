const textArea=document.getElementById('text-area');

// this will add a classlist to the element captured variable if it doesnt exist and remove it if it exists
function classListAddRemoveIfItsInTextArea(styleName,elementVariable)
{
    
    if(elementVariable.classList.contains(styleName))
                elementVariable.classList.remove(styleName);
            else
                elementVariable.classList.add(styleName);
}

//event listener for text decoration buttons

document.getElementById('container-text-decoration-buttons').addEventListener('click', function(e) {
    if(e.target.classList.contains('text-bold') || e.target.parentElement.classList.contains('text-bold'))
        {
            classListAddRemoveIfItsInTextArea('font-bold',textArea);
            classListAddRemoveIfItsInTextArea('bg-black',e.target);
            classListAddRemoveIfItsInTextArea('text-white',e.target);
            
        }
    
    else if(e.target.classList.contains('text-italic') || e.target.parentElement.classList.contains('text-italic'))
    {
        classListAddRemoveIfItsInTextArea('italic',textArea);
        classListAddRemoveIfItsInTextArea('bg-black',e.target);
        classListAddRemoveIfItsInTextArea('text-white',e.target);
            
    }

    else if(e.target.classList.contains('text-underline') || e.target.classList.contains('fa-underline'))
    {
        classListAddRemoveIfItsInTextArea('underline',textArea);
        classListAddRemoveIfItsInTextArea('bg-black',e.target);
        classListAddRemoveIfItsInTextArea('text-white',e.target);
        console.log(e.target.parentElement);
            
    }
    
});

//event listener for text alignment buttons
document.getElementById('container-text-alignment-buttons').addEventListener('click',function (e) {
    if(e.target.classList.contains('fa-align-left'))
        {
            classListAddRemoveIfItsInTextArea('text-left',textArea);
            classListAddRemoveIfItsInTextArea('bg-black',e.target);
            classListAddRemoveIfItsInTextArea('text-white',e.target);
            
        }

    else if(e.target.classList.contains('fa-align-center'))
        {
            classListAddRemoveIfItsInTextArea('text-center',textArea);
            classListAddRemoveIfItsInTextArea('bg-black',e.target);
            classListAddRemoveIfItsInTextArea('text-white',e.target);
            
        }  
    
    else if(e.target.classList.contains('fa-align-right'))
        {
            classListAddRemoveIfItsInTextArea('text-right',textArea);
            classListAddRemoveIfItsInTextArea('bg-black',e.target);
            classListAddRemoveIfItsInTextArea('text-white',e.target);
            
        } 

    else if(e.target.classList.contains('fa-align-justify'))
        {
            classListAddRemoveIfItsInTextArea('text-justify',textArea);
            classListAddRemoveIfItsInTextArea('bg-black',e.target);
            classListAddRemoveIfItsInTextArea('text-white',e.target);
            
        } 
});

//event listener for input text size
document.getElementById('input-text-size').addEventListener('change', function (e) {

    textArea.style.fontSize=e.target.value+'px';
});