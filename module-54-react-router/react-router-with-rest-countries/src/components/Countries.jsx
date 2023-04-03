import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const Countries = () => {
    const countries=useLoaderData();
    
    return (
        <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto'>
            {
                countries.map(country=><Country country={country} key={country.cca3} />)
            }
        </div>
    );
};

export default Countries;