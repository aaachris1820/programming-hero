function smallest(arr)
{
let smallestNum=arr[0];
for (let index = 1; index < arr.length; index++) {
    if (arr[index]<smallestNum) {
        smallestNum=arr[index];
    }
    
    }
return smallestNum;

}

console.log(smallest([213,432,5564,6456,76,868,42,241,124,53,65,76,87]));