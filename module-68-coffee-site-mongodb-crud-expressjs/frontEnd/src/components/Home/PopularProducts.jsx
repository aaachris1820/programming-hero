import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const PopularProducts = () => {

    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('http://localhost:4000/coffees');
            const data = await res.json();
            setCoffees(data);
        }
        loadData();
    }, [])

    return (
        <section className='mt-28'>

            <h1 className='text-center font-bold text-5xl'>Our Popular Products</h1>

            <Link to='/addCoffee' className='text-xl mx-auto block mt-10 font-semibold bg-[#D2B48C] rounded-lg py-3 px-6 w-[200px] text-white mb-10'>Add Coffee <span className='text-black '>⛾</span> </Link>

            <div className='w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 mb-32'>

                {coffees.map(coffee=> <Product key={coffee?._id} coffee={coffee} />)}
            </div>


        </section>
    );
};

export default PopularProducts;