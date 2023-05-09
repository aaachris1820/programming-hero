import React from 'react';

const Banner = () => {
    return (
        <section className='bg-[url("https://i.ibb.co/p4tZ9JD/3.png")] px-[10%] min-h-[calc(100vh-130px)] grid grid-cols-1 sm:grid-cols-2 bg-cover bg-right'>
            <div className='hidden sm:block'></div>
            <div className='flex flex-col justify-center'>
                <h1 className='font-bold text-white text-5xl mb-4'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            </div>

        </section>
    );
};

export default Banner;