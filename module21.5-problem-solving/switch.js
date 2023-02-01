function getLetter(s) {
    let letter=true;
    // Write your code here
  let set1=['a','e','i','o','u'];
  let set2=['b','c','d','g','f'];
  let set3=['h','j','k','l','m'];
  let set4=['n','p','q','r','s','t','v','w','x','y','z'];
    switch(letter){
      case set1.includes(s[0]):
        return 'A';
      case set2.includes(s[0]):
        return 'B';
      case set3.includes(s[0]):
        return 'C';
      case set4.includes(s[0]):
        return 'D';
    }
    
}
console.log(getLetter('net'));