import React, {useState} from 'react';
import auth from '../firebase-config/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Register = () => {

    const [emailErrorMsg,setEmailErrorMsg]=useState('');
    const [passwordErrorMsg,setPasswordErrorMsg]=useState('');

    const handleSumbit=async(e)=>{
        e.preventDefault();

        const email=e.target.email.value;
        const password=e.target.password.value;
        if(emailErrorMsg!='' && email!='')
            return;
        if(passwordErrorMsg!='' && password!='')
            return;
        const res=await createUserWithEmailAndPassword(auth,email,password);
        console.log(res);
    }

    const validateEmail=(e)=>{
        const regExpression=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!regExpression.test(e.target.value) && e.target.value!=''){
            console.log('error');
            setEmailErrorMsg('Enter valid email address');
        }
        else
            setEmailErrorMsg('');        
    }

    const validatePassword=(e)=>{
        const regExpression=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        if(!regExpression.test(e.target.value) && e.target.value!=''){
            console.log('error');
            setPasswordErrorMsg('password must contain one letter, one number,one special character and at least six chracters long');
        } 
        else 
            setPasswordErrorMsg('') ;    
        
    }

    return (
        <div >
            <form  className='flex flex-col border-2 shadow-md w-10/12 sm:w-7/12 lg:w-5/12 mx-auto p-6 lg:p-16 rounded-lg ' onSubmit={(e)=>handleSumbit(e)}>
                <label className='font-semibold mb-2 mt-6 text-lg' htmlFor="email">Your Email :</label>
                <input onChange={(e)=>validateEmail(e)} name='email' className='border-2 rounded-lg py-2 px-3 mb-4' type="email" required placeholder='email' />
                <p className='text-red-500'> {emailErrorMsg} </p>

                <label className='font-semibold mb-2 text-lg' htmlFor="password">Password :</label>
                <input name='password' className='border-2 rounded-lg py-2 px-3 mb-4' type="password" required placeholder='password (must contain at least 6 characters,)' onChange={(e)=>validatePassword(e)} />
                <p className='text-red-500'>{passwordErrorMsg}</p>

                <button type='submit' className='bg-blue-400 font-bold text-white px-6 py-3 w-6/12 mx-auto rounded-lg mt-6'  >Register</button>
            </form>
        </div>
    );
};

export default Register;