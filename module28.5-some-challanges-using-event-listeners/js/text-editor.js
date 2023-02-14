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

    else if(e.target.classList.contains('text-underline') || e.target.parentElement.classList.contains('text-underLine'))
    {
        classListAddRemoveIfItsInTextArea('underline',textArea);
        classListAddRemoveIfItsInTextArea('bg-black',e.target);
        classListAddRemoveIfItsInTextArea('text-white',e.target);
            
    }
    
});

