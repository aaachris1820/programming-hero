import React from 'react';
import useCount from '../../Hooks/count-hook';

const Test2 = () => {
    const [a,b]=useCount();
    return (
        <div className='w-10/12 mx-auto py-10 text-center'>

            <p>second component using same custom hook count: {a}</p>
            <button onClick={() => b(prev => prev + 1)} className='bg-red-500 py-2 px-5 text-white font-bold rounded-lg'>click me custom hook state</button>
        </div>
    );
};

export default Test2;