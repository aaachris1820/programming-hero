import React from 'react';
import { Link } from 'react-router-dom';

const AddCoffee = () => {

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const form=fieldName=>e['target'][fieldName]['value'];

        const name=form('name');
        const category=form('category');
        const photoUrl=form('photoUrl');
        const supplier=form('supplier');
        const details=form('details');

        const newCoffee={
            'name': name,
            'category': category,
            'supplier': supplier,
            'details' : details,
            'photoUrl' : photoUrl
        }
        
        const res=await fetch('http://localhost:4000/coffees',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        });
        const data= await res.json();

        console.log(data);
    }
    return (
        <div className='w-10/12 mx-auto'>
            <Link to='/' className='text-xl py-9 block text-amber-950'> Back to Home ⮕</Link>

            <form onSubmit={handleSubmit} className='bg-amber-100 rounded-sm p-16'>
                <h1 className='text-center text-4xl font-bold mb-4'>Add New Coffee</h1>
                <p className='text-center mb-8'>Do you have a favorite coffee that you want to share with the world? Whether it's a homemade brew, a local specialty, or a rare find, you can add it to our website and let other coffee lovers know about it. Simply fill out the form below with the name, origin, roast, flavor, and rating of your coffee. You can also upload a photo.</p>


                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

                    <div className='flex flex-col gap-4'>
                        <label htmlFor="name" className='font-medium'>Name</label>
                        <input type="text" className='p-2 rounded-sm' name='name' placeholder='Enter coffee name' />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label htmlFor="category" className='font-medium'>Category</label>
                        <input type="text" className='p-2 rounded-sm' name='category' placeholder='Enter coffee category' />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label htmlFor="supplier" className='font-medium'>Supplier</label>
                        <input type="text" className='p-2 rounded-sm' name='supplier' placeholder='Enter coffee supplier' />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label htmlFor="details" className='font-medium'>Details</label>
                        <input type="text" className='p-2 rounded-sm' name='details' placeholder='Enter coffee details' />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label htmlFor="photoUrl" className='font-medium'>Photo</label>
                        <input type="text" className='p-2 rounded-sm' name='photoUrl' placeholder='Enter photo url' />
                    </div>

                </div>

                <button className='px-6 py-3 rounded-lg bg-[#D2B48C] font-bold text-[#331A15] w-full mt-10' type='submit' > Add Coffee</button>

            </form>

        </div>
    );
};

export default AddCoffee;