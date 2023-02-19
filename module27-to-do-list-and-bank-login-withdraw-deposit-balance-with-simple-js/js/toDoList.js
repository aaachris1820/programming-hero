let numberValue=1; 
let inputTextItem=document.getElementById('input-text-item'
);

//add event listner on add items button to create new table items
document.getElementById('button-add-item').addEventListener('click', function() {
    if (inputTextItem.value!='')
    {
        let tableItem=document.createElement('tr');
        tableItem.setAttribute('class', 'flex  w-full items-center mb-3');
        
        tableItem.innerHTML=`
        <td class="flex-1 flex justify-center">${numberValue}</td>
        <td  class="flex-1 flex justify-center">${inputTextItem.value}</td>
        <td class="flex-1  flex justify-center">
        <button class="bg-red-500 mr-2 text-white py-2 px-4 font-semibold rounded-md button-delete" >Delete</button>
        <button class="bg-blue-500 text-white py-2 px-5 font-semibold rounded-md" >Done</button>`;
    
        document.getElementById('container-item').appendChild(tableItem);
        numberValue++;
        
    }
});

document.getElementById('container-item').addEventListener('click',function(){

    let buttonDeletes= document.getElementsByClassName('button-delete');
        for(let buttonDelete of buttonDeletes)
        {
            buttonDelete.addEventListener('click', function(event) {
                event.stopImmediatePropagation();
                console.log('button clicked');
                event.target.parentNode.parentNode.style.display='none';
                
            });
        }  
},true);      

