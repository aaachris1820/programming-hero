import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {name,flags,population}=country;
    return (
        <div className='border shaddow-md p-5 rounded-lg'>
            <div className='flex justify-center'>
            <img src={flags.svg} alt="flag" className='max-h-[150px] border rounded-sm shadow-md mb-5' />
            </div>
            
            <p> {name.official} </p>
            <p className='mb-5'>Population: {population}</p>
            <Link to={`/countries/${name.common}`} className='px-6 py-2 bg-blue-500 text-white font-bold rounded-lg '>More details</Link>
            
        </div>
    );
};

export default Country;