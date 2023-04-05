import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();

    return (
        <div className='grid grid-cols-2 md:grid-cols-5 px-8 md:px-[100px] gap-10 max-h-[80vh]'>
            <div className='md:col-span-3 flex flex-col justify-center'>
                <p className='text-yellow-500 font-bold mb-14'>Sale up to 70% off</p>
                <h1 className='text-6xl font-bold mb-2'>New Collection For Fall</h1>
                <h3 className='text-2xl'>Discover all the new arrivals of ready-to -wear collection.</h3>

                <div>
                    <button className='bg-yellow-400 font-bold px-6 py-3 rounded-lg mt-16' onClick={()=>navigate('order')}> Shop Now</button>
                </div>
            </div>

            <div className='flex items-center col-span-2'>
                <img src="https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="two young black youth" className="object-cover md:h-[calc(100vh-185px)] img-home  rounded-lg w-full"  />

            </div>
            
        </div>
    );
};

export default Home;