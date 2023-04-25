import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContextProvider';

const SignUp = () => {
    const navigate=useNavigate();
    const {createNewUserWithEmail,sendVerificationEmail}=useContext(AuthContext);

    const handleSignUp=async(e)=>{
        e.preventDefault();
        const newUser=await createNewUserWithEmail(e.target.email.value,e.target.password.value);
        
        sendVerificationEmail();

    }

    return (
        <div className="hero min-h-[calc(100vh-200px)] bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold mb-4">Sign Up now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={(e)=>handleSignUp(e)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover mt-2 text-blue-600">Have an account? </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;