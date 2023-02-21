//  convert an array with odd numbers to even numbers array using for loop and map 

console.log('map version ',[ 1, 3, 5, 7, 9 ].map(x=>x+1));

//for version
const arr=[ 1, 3, 5, 7, 9 ],evenArr=[];
for(i=0;i<arr.length;i++){
    evenArr.push(arr[i]+1);
}
console.log('for loop version ',evenArr);

// get an array by filtering all the numbers divisible by 10, logic is if they are divisible by 10 they will give 0 as remainder, so we reverse it turn true by using not operator and filter fuction will return the value since its true

console.log('filter method to get all items satisfying the condition: ',[33, 50, 79, 78, 90, 101, 30 ].filter(x=>!(x%10)));

console.log('find method to get the first item satisfying the condition: ',[33, 50, 79, 78, 90, 101, 30 ].find(x=>!(x%10)));