function make_avg(numbers, length)
{
    let sum=0;
    for(let i=0;i<length;i++)
    sum+=numbers[i];

    return sum;
}
a=[3,2,1,4,5,6]
console.log(make_avg(a,a.length))