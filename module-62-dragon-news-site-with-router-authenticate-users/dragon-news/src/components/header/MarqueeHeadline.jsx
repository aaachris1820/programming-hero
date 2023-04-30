import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeHeadline = () => {
    return (
        <div className='flex px-4 py-3 bg-gray-200 gap-5 w-10/12 mx-auto mt-8 items-center '>
            <p className='bg-red-600 text-white px-6 py-2 font-semibold mr-5
            '>Latest</p>

            <div className='font-medium overflow-hidden text-lg'>
                <Marquee >Match Highlights: Germany vs Spain — as it happened find out... </Marquee>
            </div>
            
        </div>
    );
};

export default MarqueeHeadline;