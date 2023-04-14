import React from 'react';

const Login = () => {
    return (
        <div >
            <form  className='flex flex-col border-2 shadow-md w-10/12 sm:w-7/12 lg:w-5/12 mx-auto p-6 lg:p-16 rounded-lg '>
                <label className='font-semibold mb-2 mt-6 text-lg' htmlFor="email">Your Email :</label>
                <input className='border-2 rounded-lg py-2 px-3 mb-4' type="email" />

                <label className='font-semibold mb-2 text-lg' htmlFor="password">Password :</label>
                <input className='border-2 rounded-lg py-2 px-3 mb-4' type="password" />

                <button type='submit' className='bg-blue-400 font-bold text-white px-6 py-3 w-6/12 mx-auto rounded-lg mt-6'>Login</button>
            </form>
        </div>
    );
};

export default Login;