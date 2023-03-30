const setLocalCartIncaseNotExist=()=>{
    let cart=localStorage.getItem('userCart');

    if(cart==null){
        localStorage.setItem('userCart',JSON.stringify([]));
    }
}

const getLocalCart=()=>{
    return JSON.parse(localStorage.getItem('userCart'));
}

const setLocalCartToState=(data,stateFunction)=>{
    stateFunction(data);
}

const setLocalCart=(data)=>{
    localStorage.setItem('userCart',JSON.stringify(data));
}

export {setLocalCartIncaseNotExist,getLocalCart,setLocalCartToState,setLocalCart};