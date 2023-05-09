import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({coffee}) => {

    const {name,category,supplier,photoUrl,_id}=coffee;

    const navigate=useNavigate();

    const handleDelete=async()=>{
        const res=await fetch('http://localhost:4000/coffees',{
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({"_id": _id})
        });
        
        console.log(res);
        
    }

    return (
        <div className='border rounded-lg p-6 flex flex-col lg:flex-row gap-6 justify-around items-center bg-amber-50 shadow-md'>
            <img src={photoUrl} alt="coffee photo" className='w-[180px]' />

            <div className='font-medium'>
                <p>Name : {name}</p>
                <p>Supplier : {supplier}</p>
                <p> Category : {category}</p>
            </div>

            <div className='flex flex-wrap gap-y-4 gap-x-6 lg:flex-col text-white'>

                <button className='p-2 bg-[#D2B48C]  rounded-lg'>👁</button>

                <button className='p-2 bg-black rounded-lg' onClick={()=>navigate(`/update-coffee/${_id}`)}>✎</button>

                <button className='p-2 bg-red-500 rounded-lg' onClick={handleDelete}>🗑</button>
            </div>
            
        </div>
    );
};

export default Product;