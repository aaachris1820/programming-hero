function secondLargest ( numbers ) {
    //Write your code here
    //Don't forget to return
      let sortedFromLargest;
      let count=0;
      for (let index = 0; index < numbers.length; index++) {
        for (let j = 0; j < numbers.length; j++) {
          if (numbers[index]>=numbers[j]) {
            count++;
          }
        }
        if(count==numbers.length-1)
            sortedFromLargest=numbers[index];
        count=0;
      }
    console.log(sortedFromLargest);
    }
    secondLargest([10,33,5,99,6,42,234,545,564,76]);