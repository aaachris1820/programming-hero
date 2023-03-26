const getOrSetLocalStorage=()=>{
    
    let users=localStorage.getItem('users');
    if(users){

    }
    else{
        let a={}
        a=JSON.stringify(a);
        localStorage.setItem('users',a);
        users=localStorage.getItem();
    }
}

const handleClick=(quantity,setQuantity,id)=>{
    let users=JSON.parse(localStorage.getItem('users'));

    users[id]+=1;
    setQuantity(users[id]);
    localStorage.setItem('users',JSON.stringify(users));
}
export {getOrSetLocalStorage,handleClick};