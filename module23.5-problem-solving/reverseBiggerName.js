function reverseStringName(name1,name2) {

let biggername= name1.length>name2.length? name1:name2;
return biggername.split('').reverse().join('');

}
console.log(reverseStringName('kar','lori'));