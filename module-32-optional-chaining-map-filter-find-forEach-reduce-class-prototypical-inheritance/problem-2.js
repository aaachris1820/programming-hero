// use reduce and for loop to find the sum of all members in an array

console.log('reduce version sum ',[ 1, 9, 17, 22 ].reduce((previous,current)=>previous+current,0));

//for loop
let sum=0;
const test=[ 1, 9, 17, 22 ];
for(let i=0;i<test.length;i++){
    sum+=test[i];
}
console.log('for loop version ',sum);

// find the sum of ages in the object using reduce

const people=[{name:'Meena',age:20},{name:'Rina',age:15},{name:'Surochorita',age:22}]

console.log('sum of their ages ',people.reduce((accumulator,currentIndex)=>accumulator+currentIndex.age,0));

// console some values of the object

let testObject={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };

  console.log(testObject.address.geo.lat, testObject['address']['geo']['lat']);

  console.log();