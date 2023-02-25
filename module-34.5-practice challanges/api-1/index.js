const  person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  console.log(person)

  const container=document.getElementById('container')

  const heading=document.createElement('div');
  heading.innerHTML=`
  <h1>${person.message}</h1>
  `;
  container.appendChild(heading);

  let cardContainer=document.getElementById('card-container');

  for (info of person.result){
    const card=document.createElement('div');
    card.classList.add('border-2', 'rounded-md');
    card.innerHTML=`
    <div class='bg-slate-50 border-b pl-6 py-2'>Person Name: ${info.name.common}</div>
    <p class='pl-6 pt-4'>Age: ${info.age}</p>
    <p class='pl-6 pt-4 pb-5'>Street: ${info.address.street}</p>
    `;
    cardContainer.appendChild(card);

  }