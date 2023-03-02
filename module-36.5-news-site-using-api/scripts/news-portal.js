// get element by id function
const captureHTMLElementById=idName=>document.getElementById(idName);

//get some elements

const newsContainer=captureHTMLElementById('news-container');

const newsCategories=document.getElementsByClassName('news-category');
console.log(newsCategories)

//load category data

const loadCategories=async ()=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data=await res.json();
    return data;
};


//load data from fetch function

const loadData=async categoryName=>{
    const data= await loadCategories();
    let categoryId;
    for(let category of data.data.news_category){
        
        if(category.category_name==categoryName)
            categoryId=category.category_id;
    }
    
    const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const newsData=await res.json();
    displayData(newsData.data);

}

//load news details by id
const loadNewsDetails=async id=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const data= await res.json();
    return data;
}

const displayData= (data)=>{
    console.log(data);
    newsContainer.innerHTML=''
    data.forEach(async news=>{
        const newsDetails=await loadNewsDetails(news['_id']);
        console.log(newsDetails.data[0])
        const card=document.createElement('div');
        card.innerHTML=`
        <div class="card mb-3" style="height: 300px;">
          <div class="row g-0">
            <div class="col-md-4 px-2 d-flex align-items-center">
              <img src=${news.image_url} class="w-100 rounded" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <div class="card-text truncate mt-4 text-normal"  >${newsDetails.data[0].details}</div>
                
              </div>
            </div>
          </div>
        </div>        
        `;
        newsContainer.appendChild(card);
    });
}


loadData('Breaking News');

// click event listener for news categories

for(let newsCategory of newsCategories){

    newsCategory.addEventListener('click',()=>{

        console.log();
        loadData(newsCategory.innerText);
    });
}