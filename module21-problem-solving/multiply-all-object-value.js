function myFunction (a,b) { //x is an object,y is the multiplied by number
    let objValues=Object.values(a);
    
for(let i=0;i<objValues.length;i++){
    objValues[i]*=b;
}
console.log(objValues);
let newX=Object.entries(a);
console.log(newX);
for(i=0;i<objValues.length;i++)
    newX[i][1]=objValues[i];

return Object.fromEntries(newX);
    
}
console.log(myFunction({w:15,x:22,y:13},2));