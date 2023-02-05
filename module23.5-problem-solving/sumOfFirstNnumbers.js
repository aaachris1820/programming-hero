function sumOfFirstNNumbers(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
let firstN=6;
console.log('Sum of first ',firstN, 'numbers is ',sumOfFirstNNumbers(firstN));