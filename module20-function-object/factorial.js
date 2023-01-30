function factorial(number)
{
    let result=number;
    for(let i=number-1;i>=1;i--)
    {
        result*=i;
    }
    return result;
}
num=9;
console.log('factorial of',num,'is: ',factorial(num));