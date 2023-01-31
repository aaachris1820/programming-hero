const deleteProperty =(arr)=>{
    // Write your code here.
     let obj = arr[0];
      
      let prop=Object.keys(arr[0])
      if (prop==arr[1]) {
        delete obj[prop];
        return "YES";
      } else {
        return "NO";
      }
    }
    console.log(deleteProperty([{a:3},'b']));