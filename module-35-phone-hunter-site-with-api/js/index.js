//html elements
const containerDevices=document.getElementById('container-devices');
const containerModals=document.getElementById('container-modals');
const inputSearch=document.getElementById('input-search');
const btnSearch=document.getElementById('btn-search');
const btnShow=document.getElementById('btn-show');


//get data from api

const loadData=async (query,dataLimit=false)=>{
    
    containerDevices.innerHTML=`<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>`;

    const res=await fetch(`https://api.techspecs.io/v4/product/search?query=${query}`,{
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19OUVB5Z3RSNkN3VUFncSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTY3NzM3NTMxM30.haunZ52oMwwUME95cmefz1p9_Qn54TBNJoVrWh87zPQ',
          'content-type': 'application/json'
        },
        
    });

    const data=await res.json();
    if(data.status==400){
        containerDevices.innerHTML='';
        containerDevices.innerText=data.message;
    }
    if(dataLimit=='no'){
        displayData(data.data.items,dataLimit);
    }
    else
        displayData(data.data.items.slice(0,6));
    
}

//display data in devices container
const displayData=(datas,dataLimit)=>{
    
    try{
        containerDevices.innerHTML='';
        

        for(let data of datas){
            const card=document.createElement('div');
            
            card.innerHTML=`
            <div class="card" style="width: 18rem;height:28rem">
                <img width='300px' height='300px' src=${data.image.front ? data.image.front:data.image.back} class="card-img-top px-4 py-3 object-fit-contain" alt="...">
                <div class="card-body">
                <p class="card-text">Model: <span class="fw-bold">${data.product.model}</span></p>
                <button class='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick=${getProductDetail(data.product.id)}>Show Details</button>
                </div>
            </div>
            `;
        
            containerDevices.appendChild(card);
            if(dataLimit=='no')
                btnShow.classList.add('d-none');
            else
                btnShow.classList.remove('d-none');
        }
    }
    catch(error){
        console.log(error);
    }
}



const getProductDetail=async(id)=>{
    const res=await fetch(`https://api.techspecs.io/v4/product/detail?productId=${id}`,{
        method: 'GET',
        headers: {
          accept: 'application/json',
          'Accept-Encoding': '',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19OUVB5Z3RSNkN3VUFncSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTY3NzM3NTMxM30.haunZ52oMwwUME95cmefz1p9_Qn54TBNJoVrWh87zPQ'
        }
      });
    const data=await res.json();
    modalDisplay(data.data.items);
    
}

const modalDisplay=(data)=>{
    console.log(data)
    try{
        containerModals.innerHTML='';
        const modal=document.createElement('div');
        modal.innerHTML=`
    
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="">
                    <button type="button" class="btn-close modal-header" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Released: ${data[0].date.released}</p>
                    <p>Price: ${data[0].price.msrp}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        `;
        containerModals.appendChild(modal);
    }
    catch(error){
        console.log(error);
    }
}

// load the initial devices
loadData('pros','no');

// dynamic load on search input query
inputSearch.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        loadData(inputSearch.value,false);
    }
});

btnSearch.addEventListener('click',(e)=>{
    if(inputSearch.value!=''){
        loadData(inputSearch.value,false);
    }
    else 
        alert('Enter a query!!!');
});

//show all products

btnShow.addEventListener('click',()=>{
    if(inputSearch.value!=''){
        loadData(inputSearch.value,'no');
    }
})