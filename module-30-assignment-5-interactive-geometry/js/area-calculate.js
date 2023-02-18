count=1; //global variable to count how many items were added in area container;


/*===================
=====================
card-1 event listener 
=====================
===================== */

document.getElementById('card-1').addEventListener('click',function(e){

    //finding if the event target is a button, if it is a button do rest of the task

    if(e.target.classList.contains('button')){

        //grab the card name by accessing parent nodes of the button then childrens

        const cardName=e.target.parentNode.parentNode.children[0].textContent;
        
        //get user input value of the datas by id and validate it for an error message

        const data1=getInputFloatValueById('input-b');
        
        const data2=getInputFloatValueById('input-h');

        if(data1 == -1 || data2 == -1){
            alert('!!! Please input positive numbers');
            return;
        }
        

        //area calculaion and getting the value upto two precision decimal points

        area=(0.5*data1*data2).toFixed(2);

        //set the values gotten from this function to the area container section

        setInnerHTMLInAreaContainer(count,cardName,area);

        // increase the count variable by 1 for the next item in area container section

        count++;

    }
});



/*===================
=====================
card-2 event listener 
=====================
===================== */ 

document.getElementById('card-2').addEventListener('click',function(e){

    //finding if the event target is a button, if it is a button do rest of the task

    if(e.target.classList.contains('button')){

        const cardName=e.target.parentNode.parentNode.children[0].textContent;
        
        //get user input value of datas by id and validate it for an error message

        const data1=getInputFloatValueById('input-w');

        const data2=getInputFloatValueById('input-l');

        if(data1 == -1 || data2==-1){
            alert('!!! Please input positive numbers');
            return;
        }
        

        //area calculaion and getting the value upto two precision decimal points

        area=(data1*data2).toFixed(2);

        //set the values gotten from this function to the area container section

        setInnerHTMLInAreaContainer(count,cardName,area);

        // increase the count variable by 1 for the next item in area container section

        count++;

    }
});

/*===================
=====================
card-3 event listener 
=====================
===================== */

document.getElementById('card-3').addEventListener('click',function(e){

    //finding if the event target is a button, if it is a button do rest of the task

    if(e.target.classList.contains('button')){

        //grab the card name by accessing parent nodes of the button then childrens

        const cardName=e.target.parentNode.parentNode.children[0].textContent;
        
        //grab one of the data by accessing parent nodes of the button then childrens

        const data1=parseFloat(e.target.parentNode.parentNode.children[2].children[0].children[0].textContent);
        
        //grab one of the data by accessing parent nodes of the button then childrens

        const data2=parseFloat(e.target.parentNode.parentNode.children[2].children[0].children[1].textContent);

        //area calculaion and getting the value upto two precision decimal points and converting back the string value to a number

        area=parseFloat((data1*data2).toFixed(2));

        //set the values gotten from this function to the area container section

        setInnerHTMLInAreaContainer(count,cardName,area);

        // increase the count variable by 1 for the next item in area container section

        count++;

    }
});

/*===================
=====================
card-4 event listener 
=====================
===================== */

document.getElementById('card-4').addEventListener('click',function(e){

    //finding if the event target is a button, if it is a button do rest of the task

    if(e.target.classList.contains('button')){

        //grab the card name by accessing parent nodes of the button then childrens

        const cardName=e.target.parentNode.parentNode.children[0].textContent;
        
        //grab one of the data by accessing parent nodes of the button then childrens

        const data1=parseFloat(e.target.parentNode.parentNode.children[2].children[0].children[1].textContent);
        
        //grab one of the data by accessing parent nodes of the button then childrens

        const data2=parseFloat(e.target.parentNode.parentNode.children[2].children[0].children[3].textContent);

        //area calculaion and getting the value upto two precision decimal points
        area=(0.5*data1*data2).toFixed(2);

        //set the values gotten from this function to the area container section

        setInnerHTMLInAreaContainer(count,cardName,area);

        // increase the count variable by 1 for the next item in area container section

        count++;

    }
});

/*===================
=====================
card-5 event listener 
=====================
===================== */

document.getElementById('card-5').addEventListener('click',function(e){

    //finding if the event target is a button, if it is a button do rest of the task

    if(e.target.classList.contains('button')){

        //grab the card name by accessing parent nodes of the button then childrens

        const cardName=e.target.parentNode.parentNode.children[0].textContent;
        
        //grab one of the data by accessing parent nodes of the button then childrens

        const data1=parseFloat(e.target.parentNode.parentNode.children[2].children[0].children[0].textContent);
        
        //grab one of the data by accessing parent nodes of the button then childrens

        const data2=parseFloat(e.target.parentNode.parentNode.children[2].children[0].children[1].textContent);

        //area calculaion and getting the value upto two precision decimal points

        area=parseFloat((0.5*data1*data2).toFixed(2));

        //set the values gotten from this function to the area container section

        setInnerHTMLInAreaContainer(count,cardName,area);

        // increase the count variable by 1 for the next item in area container section

        count++;

    }
});

/*===================
=====================
card-6 event listener 
=====================
===================== */ 

document.getElementById('card-6').addEventListener('click',function(e){

    //finding if the event target is a button, if it is a button do rest of the task

    if(e.target.classList.contains('button')){

        //grab the card name by accessing parent nodes of the button then childrens

        const cardName=e.target.parentNode.parentNode.children[0].textContent;
        
        //grab one of the data by accessing parent nodes of the button then childrens

        const data1=parseFloat(e.target.parentNode.parentNode.children[2].children[0].children[0].textContent);
        
        //grab one of the data by accessing parent nodes of the button then childrens

        const data2=parseFloat(e.target.parentNode.parentNode.children[2].children[0].children[1].textContent);

        //area calculaion and getting the value upto two precision decimal points

        area=(3.14*data1*data2).toFixed(2);

        //set the values gotten from this function to the area container section

        setInnerHTMLInAreaContainer(count,cardName,area);

        // increase the count variable by 1 for the next item in area container section

        count++;

    }
});
