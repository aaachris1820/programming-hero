import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
                <div className='flex flex-col justify-center my-auto items-center h-[100vh] '>
            <h1 className='text-4xl'>4<span className='border-4 animate-bounce p-3  border-red-500 border-dashed rounded-full inline-block'></span>4<span className='text-yellow-400 ml-6 text-6xl'>|</span> Oops the page could not be found</h1>
            <Link to='/' className='my-10 px-6 py-3 bg-yellow-400 font-bold rounded-lg'>Go Back Home</Link>
        </div>
    
        </>

    );
};

export default Error404;