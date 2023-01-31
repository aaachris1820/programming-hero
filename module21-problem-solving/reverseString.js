const reverseMaker = (word)=> {
    //Write Your solution Here
    let reverse='';
    for (i=word.length;i>0;i--) {
        reverse+=word.slice(i-1,i);
    }
    console.log(reverse);
  };
reverseMaker('bat');