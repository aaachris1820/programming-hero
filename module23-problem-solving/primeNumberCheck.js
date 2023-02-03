function isPrime(number) {
let count=0;
for (let i = 1; i <= Math.floor(number/2); i++) {
    
    if(number%i==0)
        count++;
    
    
}
return count>1?'not a prime number':'a prime number';
}
let number=9999991;
console.log(number, 'is ',isPrime(number));