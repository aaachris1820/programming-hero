function secondSmallest(arr)
{
let smallestNum=arr[0];
let cloneArr=[arr[0]]
for (let index = 1; index < arr.length; index++) {
    cloneArr.push(arr[index]);
    if (arr[index]<smallestNum) {
        smallestNum=arr[index];
    }
    
    }
    //remove the smallest number in cloned array
    //then find the smallest number in the cloned 
    //array without the smallest number
    //can be made reusable by making a function
    //to just find the smallest number
let temp=cloneArr.indexOf(smallestNum);
cloneArr.splice(temp,1);
smallestNum=cloneArr[0];
for (let index = 1; index < cloneArr.length; index++) {
    if (cloneArr[index]<smallestNum) {
        smallestNum=cloneArr[index];
    }
    
    }
return smallestNum;
}

console.log(secondSmallest([213,432,5564,6456,76,868,42,241,124,53,65,76,87,52]));