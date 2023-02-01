function countZeros ( binary_num ) {
    //Write your code here
    //Don't forget to return
    let count=0;
    for(let i=0;i<binary_num.length;i++)
    {
        if(binary_num[i]=='0')
        count++;
    }
    console.log(count);
    }
    countZeros('101101');