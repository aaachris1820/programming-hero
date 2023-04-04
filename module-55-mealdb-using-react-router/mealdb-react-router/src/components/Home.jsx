import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate();
    const orderNowHandler=()=>{
        navigate('/categories');
    }
    return (
        <div className='flex my-20 items-center gap-6 flex-wrap justify-center flex-col w-10/12 mx-auto'>
            <img src="https://th.bing.com/th/id/OIP.Ei4M-65OoHTzyILwLUJGdQHaE8?pid=ImgDet&rs=1" alt="foods in a table" className='border rounded-lg w-10/12 max-h-[450px] object-cover' />
            <p className='font-bold text-2xl'>Hundreds of menu to satisfy your cravings.</p>
            <button className='bg-blue-500 text-white px-8 py-3 rounded-lg font-extrabold' onClick={orderNowHandler}> Order Now</button>
        </div>
    );
};

export default Home;