import React from 'react';
import gitLogo from '../../assets/gitLogo.svg'

const OtherLogin = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-xl font-bold'>Login With</h1>
            
            <button className='font-medium text-blue-500 px-8 py-2 border border-blue-400 rounded-lg mt-8'><span className='font-bold text-lg'>G</span> Login with Google</button>

            <button className='font-medium text-gray-600 px-8 py-2 border border-gray-400 rounded-lg mt-4 flex items-center'>
                <img className='h-5 mr-3' src={gitLogo} alt="github logo" />
                Login with Github</button>
        </div>
    );
};

export default OtherLogin;