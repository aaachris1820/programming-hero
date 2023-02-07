function factorialRecursive(factorialNumber)
{
    if(factorialNumber==1)
        return 1;
    
    return factorialNumber*factorialRecursive(factorialNumber-1);
}
let factorialOf=10;
console.log('Factorial of', factorialOf,'is ', factorialRecursive(factorialOf));