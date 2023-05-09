import React from 'react';
import coffee from '../../assets//icons/1.png'
import ribbon from '../../assets//icons/2.png'
import balls from '../../assets//icons/3.png'
import coffeeCup from '../../assets//icons/4.png'

const Qualities = () => {
    return (
        <section className='bg-amber-100 text-[#331A15] px-[10%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-6 py-10'>

            <div className='w-[300px]'>
                <img src={coffee} alt="coffee" />
                <h2 className='font-bold text-4xl mb-2'>Awesome Aroma</h2>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>

            <div className='w-[300px]'>
                <img src={ribbon} alt="coffee" />
                <h2 className='font-bold text-4xl mb-2'>High Quality</h2>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>

            <div className='w-[300px]'>
                <img src={balls} alt="coffee" />
                <h2 className='font-bold text-4xl mb-2'>Pure Grades</h2>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>

            <div className='w-[300px]'>
                <img src={coffee} alt="coffeeCup" />
                <h2 className='font-bold text-4xl mb-2'>Proper Roasting</h2>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </section>
    );
};

export default Qualities;