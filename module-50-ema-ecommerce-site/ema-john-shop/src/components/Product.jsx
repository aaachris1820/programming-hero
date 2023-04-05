import React from 'react';

const Product = ({product,handleClick}) => {
    const {name,price,img,seller,ratings,quantity}=product;
    return (
        
            <div className="card card-compact w-[320px] bg-base-100 shadow-xl">
  <figure className='p-4'><img src={img} alt="product" className='rounded-lg' /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price : $ {price} </p>
    <p>Manufacturer : {seller} </p>
    <p>Rating : {ratings}/5 </p>
    <div className="card-actions justify-end">
      <button className="bg-yellow-400 px-6 py-3 font-bold rounded-xl shadow-md" onClick={()=>handleClick(product)}>Add to cart</button>
    </div>
  </div>
</div>
        
    );
};

export default Product;