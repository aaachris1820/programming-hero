import React from 'react';

const OrderSummary = ({cart}) => {
    return (
        <div style={{border:"1px orange solid",borderRadius:"8px",padding:"16px",minHeight:"300px"}}>
            <h2 style={{textAlign:"center"}}>Order Summary</h2>
            
            {cart.map((meal,index)=>{
                return <p key={meal.idMeal}>{index+1}. {meal.strMeal}</p>
            })}
        </div>
    );
};

export default OrderSummary;