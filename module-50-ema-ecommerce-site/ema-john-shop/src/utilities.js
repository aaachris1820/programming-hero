const getOrSetCartThenGetCart=()=>{
    let cart=localStorage.getItem('cart');
    if(!cart){
        
        localStorage.setItem('cart',JSON.stringify([]));  
        cart=localStorage.getItem('cart');
    }
    return JSON.parse(cart);
}

export {getOrSetCartThenGetCart}