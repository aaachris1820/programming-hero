import React, { useEffect, useState } from 'react';
import { handleClick } from '../utilitites/utilities-function';

const User = (props) => {

    const{name,age,id}=props;
    const [quantity,setQuantity]=useState(0);
    useEffect(()=>{
        let users=JSON.parse(localStorage.getItem('users'));

        if(users[id]){
            setQuantity(users[id]);
        }

        else{
            users[id]=quantity;
        }

        localStorage.setItem('users',JSON.stringify(users));

        },[])
    return (
        <div style={{border:"1px gray solid",borderRadius:"10px",padding:"17px"}}>
            
            <h3>Name:{name}</h3>
            <p>Age: {age} </p>
            <p>Total: {quantity} </p>
            <button onClick={()=>{
                return handleClick(quantity,setQuantity,id);
                
                }}>Add to cart</button>

        </div>
    );
};

export default User;