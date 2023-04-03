import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center items-center flex-col my-10 gap-6'>
            <img src="https://th.bing.com/th/id/OIP._wXE2580orDcej1TBbvUMQHaHZ?pid=ImgDet&rs=1" alt="globe" className='w-3/12' />
            <p className='font-semibold text-2xl mb-2'>Let us tour the world with rest countries</p>
            <Link to={"countries/"} className='bg-blue-600 text-white font-bold px-6 py-3 rounded-lg'>Let's Go</Link>
        </div>
    );
};

export default Home;