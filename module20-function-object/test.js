
function f(a,b)
{
  if (b in a)
   {
    if(a[b] === null || a[b] === undefined || a[b] === false)
    return false;
    else return true;
   }

else
return false;    
}
let ask={ass: false}
console.log(f(ask,'ass'));
let name = prompt("Enter your name: ");
console.log("Hello " + name + "!");

