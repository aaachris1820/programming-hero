function fibonacci (amount) {
    let first=0;
    let second=1;
    let series=''+first.toString()+','+second.toString();
    let next=first+second;
    
    let temp;
    for(let i=2;i<amount;i++){
        series+=','+next.toString();
        temp=second;
        second=next;
        next=temp+second;
        
    }
    return series;
}
console.log(fibonacci(10));