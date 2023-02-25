//sync js
/*   const loadData=()=>{
    fetch('https://aaachris1820.github.io/practice-api/api-1.json')
    .then(res=>res.json())
    .then(res=>displayData(res))
    
  } */
  //async js
  const loadData=async()=>{
    const res=await fetch('https://aaachris1820.github.io/practice-api/api-1.json');
    const data=await res.json();
    displayData(data);
  }

  const displayData=(person)=>{
    
    const container=document.getElementById('container')

    const heading=document.createElement('div');
    heading.innerHTML=`
    <h1>${person.message}</h1>
    `;
    container.appendChild(heading);
    let cardContainer=document.getElementById('card-container');

 for (let info of person.result){
      const card=document.createElement('div');
      card.classList.add('border-2', 'rounded-md');
      card.innerHTML=`
      <div class='bg-slate-50 border-b pl-6 py-2'>Person Name: ${info.name.common}</div>
      <p class='pl-6 pt-4'>Age: ${info.age}</p>
      <p class='pl-6 pt-4 pb-5'>Street: ${info.address.street}</p>
      `;
      cardContainer.appendChild(card);
  
    } 
  }
  loadData();