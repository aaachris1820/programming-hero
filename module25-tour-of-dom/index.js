let idPracticeList=document.getElementById('id-practice-list');
console.log(typeof idPracticeList);
console.log(idPracticeList);
/* idPracticeList.innerHTML=`<ul>
<li>list 1</li>
</ul>`; */
// idPracticeList.innerText='hello';

let classPracticeList=document.getElementsByClassName('class-practice-list');
console.log(typeof classPracticeList);
console.log(classPracticeList);
/* classPracticeList[0].innerHTML=`<ol>
<li>list 1</li>
</ol>` */
// classPracticeList[0].innerText='sds';

let queryPracticeList=document.querySelector('#id-practice-list');
console.log(typeof queryPracticeList);
console.log(queryPracticeList);
// queryPracticeList.innerHTML same as getElementByID

let queryAllPracticeList=document.querySelectorAll('li');
console.log(typeof queryAllPracticeList);
console.log(queryAllPracticeList);
//Nodelist is kind of an array, can manipulate innerHTML by index like getElementsByClassNames

let tagPracticeList=document.getElementsByTagName('li');
console.log(typeof tagPracticeList);
console.log(tagPracticeList);
// innerHTML access process is same as getElementsByClassNames
let newOrderedList=document.createElement('ol');
newOrderedList.innerHTML=`
<li>order 1</li>
<li>order 2</li>
<li>order 3</li>
`;
classPracticeList[0].appendChild(newOrderedList);