const loadProducts=async ()=>{
    const res= await fetch('./products.json');
    return res;
}

export {loadProducts, };
    