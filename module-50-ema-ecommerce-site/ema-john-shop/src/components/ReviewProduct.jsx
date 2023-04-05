import React from 'react';


const ReviewProduct = ({product,handleRemove}) => {
    const {name,img,price,shipping,id}=product;

    return (
        <div className='flex items-center gap-6 flex-wrap shadow-md rounded-lg p-4'>
            <img src={img} alt="product image" className='w-[90px] object-cover rounded-lg' />

            <div className='flex-1 flex flex-col'>
                <h2 className='font-semibold'>{name}</h2>
                <p>Price : <span className='text-yellow-500'>${price}</span> </p>
                <p>Shipping Charge: <span className='text-yellow-500'>${shipping}</span></p>
            </div>

            <div>
                <button className='bg-red-500 px-6 py-2 text-white font-bold rounded-lg' onClick={()=>handleRemove(id)}>Remove</button>
            </div>


        </div>
    );
};

export default ReviewProduct;