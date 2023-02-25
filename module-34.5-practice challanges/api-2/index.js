const loadData=async()=>{
    const res=await fetch('https://aaachris1820.github.io/practice-api/api-2.json');
    const data=await res.json();
    console.log(data);
    displayData(data);
}
const displayData=datas=>{
    

    const container=document.getElementById('container');
    for(let data of datas){

        const card=document.createElement('div');
        card.classList.add('border-2','rounded-md', 'py-3','px-6');
        card.innerHTML=`
        <img src=${data.imageURL} alt="Car Photo">
        <p class="text-xl mb-3 font-semibold">Car Name: ${data.name}</p>
        <p>Car Details: ${data.description}</p>
        <button class="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg mt-4 mb-4">Car Price: ${data.price}</button>
        `;
        container.appendChild(card);
    }
}

loadData();