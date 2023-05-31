import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from './Product';
import { AuthContext } from '../AuthProvider/AuthContextProvider';
import useCoffees from '../../Hooks/coffees-state-hook';

const PopularProducts = () => {

    const navigate = useNavigate();
    const [coffees=[],]=useCoffees();
    console.log();

    const { user,signOutUser } = useContext(AuthContext)


    return (
        <section className='mt-28'>

            <h1 className='text-center font-bold text-5xl'>Our Popular Products</h1>

            {user
                ? <>
                    <p>{user.displayName || 'name not found'}</p>
                    <button className='px-5 py-2 bg-black text-white font-bold rounded-lg' onClick={signOutUser}>Sign Out</button>
                </>
                : <button className='px-5 py-2 bg-black text-white font-bold rounded-lg' onClick={() => navigate("/login")}>Login</button>}

            <Link to='/addCoffee' className='text-xl mx-auto block mt-10 font-semibold bg-[#D2B48C] rounded-lg py-3 px-6 w-[200px] text-white mb-10'>Add Coffee <span className='text-black '>⛾</span> </Link>

            <div className='w-10/12 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 mb-32'>

                {coffees.map(coffee => <Product key={coffee?._id} coffee={coffee} />)}
            </div>


        </section>
    );
};

export default PopularProducts;