function numberGreaterThan5(arr) {
    let arr5=[];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]>5)
        arr5.push(arr[index]);
        
    }
    return arr5;
}
console.log('Numbers greater than 5 are: ',numberGreaterThan5([-1,2,-3,4,5,6,-7,8,-9,10]));