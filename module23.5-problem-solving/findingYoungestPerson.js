function findYoungestPerson(input) {
    let youngest=input[0];
    for (let index = 1; index < input.length; index++) {
    if(input[index].age<youngest.age) {
        youngest=input[index];
        }   
    }
return youngest.name;
}
let personArray=[{name:'sakib', age:30},{name:'samiul', age:20},{name:'sahid', age:5},{name:'samin', age:10}]
console.log(findYoungestPerson(personArray), ' is youngest');