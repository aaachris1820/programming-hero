import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCountry = () => {
    const country=useLoaderData();
    
    const {name,flags,population,capital,continents,timezones}=country[0]
    
    return (
        <div className='border shaddow-md p-5 rounded-lg w-8/12 mx-auto'>
            <div className='flex justify-center'>
            <img src={flags.svg} alt="flag" className='max-h-[200px] border rounded-sm shadow-md mb-8' />
            </div>
            
            <p className='text-xl font-semibold mb-4'> {name.official} </p>
            <p>Capital : {capital}</p>
            <p >Population : {population}</p>
            <p>Continent: {continents} </p>
            <p>TimeZone : {timezones} </p>
                       
        </div>
    );
};

export default SingleCountry;