import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center my-auto items-center h-[100vh] '>
        <h1 className='text-4xl'>L<span className='border-4 animate-spin p-3  border-red-500 border-dashed rounded-full inline-block'></span>ding... </h1>
        
    </div>
    );
};

export default Loading;