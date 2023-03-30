import React from 'react';
import './meal.css'

const Meal = ({name,area,imageUrl,meal,handleAddToCart}) => {
    return (
        <div style={{border:"1px orange solid",borderRadius:"8px",padding:"8px",minHeight:"300px"}}>
            <img src={imageUrl} alt={name} style={{width:"100%",borderRadius:"8px"}} />
            <p>Name : {name}</p>
            <p>Origin : {area}</p>
            <button className="btn-add-to-cart" onClick={(e)=>{
                e.target.disabled=true;
                e.target.classList.add('disabled')
                
                handleAddToCart(meal)}}>Add to Cart</button>
        </div>
    );
};

export default Meal;