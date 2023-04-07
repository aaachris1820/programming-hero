import React from 'react';


const Product = ({product}) => {
    const {title,image,rating,price}=product;

    return (
        <div className='border rounded-lg p-5'>
            <div className='flex justify-center'>
                <img src={image} alt={title+'photo'} className='h-[250px] object-cover rounded-lg ' />
            </div>
            
            <p className='font-semibold text-lg mt-6'>{title}</p>
            <p>Price : {price}</p>
            <p>Rating : {rating.rate} ({rating.count} reviews) </p>
        </div>
    );
};

export default Product;