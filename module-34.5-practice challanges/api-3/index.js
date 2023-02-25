let hidden=true;
let region='';
document.getElementById('body').addEventListener('click',(e)=>{
    
    if(hidden==true && e.target.id=='filter'){
        document.getElementById('options').classList.remove('hidden');
        hidden=false;
    }
    else {
        document.getElementById('options').classList.add('hidden');
        hidden=true;

    }
});
document.getElementById('options').addEventListener('click',(e)=>{
    if(e.target.classList.contains('option')){
        document.getElementById('filter').innerHTML=`
        ${e.target.innerText} <img src="chevron-down.svg" alt="chevron down" class="inline ml-10">
        `;
        region='region/'+e.target.innerText;
        loadData(region);
    }
});

const loadData=async(id)=>{
    let URLend=id||region;
    const res=await fetch('https://restcountries.com/v3.1/'+URLend);
    const data=await res.json();
    displayData(data);
    
}
const displayData=(datas)=>{
    const container=document.getElementById('container');
    container.innerHTML='';
    datas=datas.slice(0,10);
    for (let data of datas){

        const card=document.createElement('div');
        card.classList.add('border-2','px-5','py-5','rounded-lg');
        card.innerHTML=`
        <img src=${data.flags.svg} class="w-10/12 h-[100px] object-scale-down" alt="flag">
        <p class="mt-8">Name: <span class='font-bold'>${data.name.official}</span></p>
        <p class="mt-2">Capital: ${data.capital}</p>
        <p class="mt-2">Region: ${data.region}</p>
        
        `;
        container.appendChild(card);
    }


}
loadData('all');