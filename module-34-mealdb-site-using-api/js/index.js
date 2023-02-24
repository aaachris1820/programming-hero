let count=0;
const loadData=async (searchString)=>{
    try{
        const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`);
        const data= await res.json();
        
        displayFood(data.meals);
        hideFood();
    }
    catch (error) {
        console.log(error);
    }
}

loadData('chicken');
document.getElementById('btn-show').addEventListener('click',showFood);
document.getElementById('btn-search').addEventListener('click',function (){

    const searchString=document.getElementById('input-search').value;
    count=0;
    loadData(searchString);
    
})


function displayFood(foods){
    document.getElementById('food-container').innerHTML='';
    for(let food of foods){
        const card=document.createElement('div');
        card.classList.add('cards');
        
        card.innerHTML=`
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${food.strMealThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title fw-bold mb-3">${food.strMeal}</h5>
        <p class="m-0">${food.strArea} food</p>
        <a class="card-text mb-4 d-block" href=${food.strYoutube}>${food.strYoutube}</a>
        <button class="btn btn-warning btn-details fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal${count}">View Details</button>
      </div>
    </div>
  </div>
</div>
        `
    
    document.getElementById('food-container').appendChild(card);

    modals(food.idMeal,count);
    count++;
    

    }
}


const modals=async (id,count) =>{
try{
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data=await res.json();
    const food=data.meals[0];

    
        const modal=document.createElement('div');
        modal.innerHTML='';
        modal.innerHTML=`
        <div class="modal fade" id="exampleModal${count}" tabindex="-1" aria-labelledby="exampleModalLabel${count}" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">${food.strMeal}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="px-5 pb-3 d-flex justify-content-center"><img class="img-fluid object-fit-fill w-75 rounded" src=${food.strMealThumb}></div>
        <p><span class="fw-semibold">Category: </span>${food.strCategory}</p>
        <p><span class="fw-semibold">Area : </span>${food.strArea}</p>
        <p><span class="fw-semibold">Instructions : </span>${food.strInstructions}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        `
        document.getElementById('modal-container').appendChild(modal);
}

catch(error){
    console.log(error);
}

}

function hideFood(){
    try{
        const cards=document.getElementsByClassName('cards');
    
    for(let i=6;i<cards.length;i++){
        cards[i].classList.add('d-none');

    }
    }
    catch(error){
        console.log();
    }
}

function showFood (){
          
    const cards=document.getElementsByClassName('cards');
    
    for(let i=6;i<cards.length;i++){
            cards[i].classList.remove('d-none');
    }
    
}

