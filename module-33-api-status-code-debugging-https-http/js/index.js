let countries;
fetch('https://restcountries.com/v3.1/currency/dollar')
    .then(res=> res.json())
    .then(data=>{
        data.forEach(data=>{
            console.log(data)
            const div=document.createElement('div');
            div.classList.add('border-2', 'rounded-lg', 'shadow-md', 'flex', 'flex-col', 'px-8','py-10', 'gap-y-3')
            div.innerHTML= `
            <div class=" text-xl font-semibold mb-10 flex gap-y-4 items-center flex-col">
            <img src=${data.flags.svg} class='w-12 h-8'>
            <p>${data.name.official}</div>
            <p>Capital : ${data.capital[0]}</p></div>
                <p>Population : ${data.population}</p>
                <p>Timezone : ${data.timezones[0]}</p>
                
            `
            document.getElementById('container-api-data').appendChild(div);
        })
    })