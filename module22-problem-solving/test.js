const deleteProperty =(arr)=>{
    // Write your code here.
      let object=Object.keys(arr[0]);
      
      if (object[0]==arr[1]) {
        delete arr[0][arr[1]];
        return 'YES'
      } else {
        return 'NO'
      }
    }
    let x=[{fname:'John',},'fname']
    console.log(deleteProperty(x));
    console.log(x);