import React from 'react';

const Home = () => {
    return (
        <div className='py-12 w-10/12 mx-auto grid sm:grid-cols-2 gap-14 grid-cols-1  h-[calc(100vh-114px)]'>
            <div className='flex flex-col justify-center '>
                <p className='text-orange-500 font-bold text'>Shop at discount upto 50%</p>
                <h1 className='mt-6 text-5xl font-bold'>Discover a wide range of products and deals at the click of a button</h1>
                <div>
                    <button className='mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg'>Shop Now</button>
                </div>
                
            </div>
                <img src="https://images.pexels.com/photos/8938664/pexels-photo-8938664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="online shopping, hand holding credit card" className='object-cover w-full h-[calc(100vh-204px)] rounded-lg' />
            <div>

            </div>
            
        </div>
    );
};

export default Home;