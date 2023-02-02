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

function secondSmallest(arr){
    //clone the array
    let cloneArr=[];
    for (let index = 0; index < arr.length; index++) {
        cloneArr.push(arr[index]);   
    }
    let temp=smallest(cloneArr);
    let temp1=cloneArr.indexOf(temp);
    cloneArr.splice(temp1,1);
    return smallest(cloneArr);
}

console.log(secondSmallest([213,432,5564,6456,76,868,42,241,124,53,65,76,87,52]));