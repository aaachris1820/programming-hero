//function to get element by id
const captureHTMLElementById=idName=>document.getElementById(idName);

// loads data from api
const loadData=async()=>{
    console.log("start");
    const res= await fetch('https://forbes400.onrender.com/api/forbes400?limit=50');
    console.log('got json object');
    const data= await res.json();
    console.log('got converted',data);
}

loadData();