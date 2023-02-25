const loadData=async(link)=>{
    const res=await fetch("https://api.rebrandly.com/v1/links",{
        method: 'POST',
        headers: {
      'Content-Type': 'application/json',
      'apikey': '8bbc2f550ded48df93612afc09526e77'
    },
    body: JSON.stringify({
      destination: link
    })

    });
    const data=await res.json();
    console.log(data);
    if(data.shortUrl==undefined)
        data.shortUrl='provide a valid link';
    
    displayData(data.shortUrl);
}
const displayData=data=>{

    const container=document.getElementById('container');
    container.innerHTML='';
    const p=document.createElement('div');
    p.classList.add('mt-6','w-8/12',  'mx-auto','font-semibold');
    p.innerHTML=`
    Your shortened link: <a href=https://${data} class="text-blue-600">${data}</a>
    `;
    if(data=='provide a valid link')
        p.innerHTML=`Provide a valid link!!!`;
    container.appendChild(p);
    document.getElementById('link-container').appendChild(p);
}

document.getElementById('btn-shortenIt').addEventListener('click', ()=>{
    const link=document.getElementById('user-link');
    if(link.value!=''){
        loadData(link.value);
        
    }
    else
        alert('Link required!!!');
});
const linkContainer=document.getElementById('link-container');
document.getElementById('btn-link').addEventListener('click',()=>{
    linkContainer.classList.remove('hidden');
});

document.getElementById('btn-links-close').addEventListener('click',()=>{
    linkContainer.classList.add('hidden');
});