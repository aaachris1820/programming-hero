function myFunction(obj)
{

a=Object.values(obj);
let sum=0;
for (let i=0;i<a.length;i++)
{
    sum+=a[i];
}
return sum;
}
let a=myFunction({w:15,x:22,y:13});
console.log(a);