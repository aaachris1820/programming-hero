/*  arrow function 
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result */

let evenLengthNames=(arrayFriendNames)=>{
    const output=[];
    for (let i of arrayFriendNames){

        if(i.length%2==0)
            output.push(i);
    }
    return output;
}

console.log(evenLengthNames(['hen','doggy','john','cassie','nin','hell']));