import React from 'react';
import auth from '../firebase-config/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const handleSumbit=async(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        const res=await signInWithEmailAndPassword(auth,email,password);
        console.log(res);
    }

    return (
        <div >
            <form  className='flex flex-col border-2 shadow-md w-10/12 sm:w-7/12 lg:w-5/12 mx-auto p-6 lg:p-16 rounded-lg ' onSubmit={(e)=>handleSumbit(e)}>
                <label className='font-semibold mb-2 mt-6 text-lg' htmlFor="email">Your Email :</label>
                <input name='email' className='border-2 rounded-lg py-2 px-3 mb-4' type="email" required />

                <label className='font-semibold mb-2 text-lg' htmlFor="password">Password :</label>
                <input name='password' className='border-2 rounded-lg py-2 px-3 mb-4' type="password" required />

                <button type='submit' className='bg-blue-400 font-bold text-white px-6 py-3 w-6/12 mx-auto rounded-lg mt-6'  >Login</button>
            </form>
        </div>
    );
};

export default Login;