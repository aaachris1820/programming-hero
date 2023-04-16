import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContextWrapper';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {createUserWithEmail,setUser}=useContext(AuthContext);
    const navigate=useNavigate();
    
    const handleSignup=async(e)=>{
        e.preventDefault();
   
        const user=await createUserWithEmail(e.target.email.value,e.target.password.value);
        if(user)
            navigate('/login');
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={(e)=>handleSignup(e)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    
                </form>
            </div>
        </div>
</div >
    );
};

export default Register;