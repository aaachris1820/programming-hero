import React from 'react';

const Product = (props) => {
    const {name,price,imgUrl,handleClick,seller,rating,id}=props;
    return (
        
            <div className="card card-compact w-[320px] bg-base-100 shadow-xl">
  <figure className='p-4'><img src={imgUrl} alt="product" className='rounded-lg' /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price : {price} </p>
    <p>Manufacturer : {seller} </p>
    <p>Rating : {rating}/5 </p>
    <div className="card-actions justify-end">
      <button className="bg-yellow-400 px-6 py-3 font-bold rounded-xl shadow-md" onClick={()=>handleClick(id)}>Add to cart</button>
    </div>
  </div>
</div>
        
    );
};

export default Product;