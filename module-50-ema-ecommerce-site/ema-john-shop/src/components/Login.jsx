import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContextProvider';

const Login = () => {
  const navigate=useNavigate();
  const [loginMessage,setLoginMessage]=useState('');

  const {user,loginWithEmail}=useContext(AuthContext);

  const handleLogin=async(e)=>{
    e.preventDefault();
    const userLogin= await loginWithEmail(e.target.email.value,e.target.password.value);
    if(userLogin)
      navigate('/')
  }

    return (
        <div className="hero min-h-[calc(100vh-200px)] bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-4">Login now!</h1>

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={(e)=>handleLogin(e)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' required type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' required type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;