var fruits = ["Apple","Banana", "Orange"]
//removing banana and replace with Mangoes
fruits.splice(1,1,"Mango");
// console.log(fruits);

//remove orange and replace it with watermelon
fruits.pop();
fruits.push("Watermelon")
// console.log(fruits);
var a=99.9999999;
var b=a.toFixed(2);
// console.log(a+2);
let numbers = [1, 5, 2, 8, 3];
let max = Math.max(...numbers);
// console.log(max+' '+max); // Output: 8
var unsorted =[8,
    1,
    2,
    100,
    12303479849857341718340192371,
    3084193741082937,
    3084193741082938,
    111,
    200]
    function bigSorting(unsorted) {
        // Write your code here
        var i;
        var j;
        var n=0;
        var sorted=[];
     for(i=0;i< unsorted.length;i++)
        {
            for(j=0;j<unsorted.length;j++)
            {
                if (unsorted[i]>unsorted[j])
                 n+=1;
                else if(unsorted[i]==unsorted[j] && i>j)
                 n+=1;
            }
            sorted[n]=unsorted[i];
            n=0;
        }
        return sorted;
    }
    console.log(bigSorting(unsorted));

unsorted.sort(function(a, b) {
  return a - b;
});
console.log(unsorted);
 


