import React, { useContext } from 'react';
import { AuthContext } from '../AuthContextProvider';
import { Navigate, useNavigate } from 'react-router-dom';


const Orders = ({cart,handleClearCart,checkout}) => {


const price=cart.reduce((sum,pd)=>sum+(pd.price*pd.quantity),0);

const shipping=cart.reduce((sum,pd)=>sum+pd.shipping*pd.quantity,0);

const tax=parseFloat((price*.07).toFixed(2));

const grandTotal=(price+shipping+tax).toFixed(2);
const {user,currentLocation}=useContext(AuthContext);
const navigate=useNavigate();

    const handleCheckout=()=>{
        navigate('/inventory');
    }
    

    return (
        <div className=' bg-amber-200 p-12 border rounded-xl shadow-sm text-slate-700 font-medium lg:sticky lg:top-0 '>
                <h1 className='text-xl font-semibold mb-2'>Order summary</h1>

                <p>Selected Items : {cart.reduce((sum,pd)=>sum+pd.quantity,0)} </p>

                <p>Total Price : $ {price}</p>

                <p>Shipping Charge : $ {shipping} </p>

                <p>Tax : $ {tax}</p>

                <h3 className='text-lg font-bold my-2'>Grand Total : ${grandTotal} </h3>

                <button className='bg-red-600 rounded-lg px-5 py-2 text-white font-semibold mt-4' onClick={handleClearCart}> Clear Cart</button>

                {checkout&&
                <button className='bg-green-600 rounded-lg px-5 py-2 text-white font-semibold mt-4 block' onClick={handleCheckout}> Proceed to Checkout</button>}
                
                

            </div>
    );
};

export default Orders;