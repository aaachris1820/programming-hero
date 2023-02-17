function setInnerHtmlById(idName,templateStringValue){
    let tr=document.createElement('tr');
    tr.innerHTML=templateStringValue;

    document.getElementById(idName).appendChild(tr);
}
function setTextContentById(idName,numberValue){
    document.getElementById(idName).textContent=numberValue;
}