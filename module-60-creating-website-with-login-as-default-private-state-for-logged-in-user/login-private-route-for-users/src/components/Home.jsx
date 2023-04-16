import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContextWrapper';

const Home = () => {
    const{user}=useContext(AuthContext);
    return (
        <div>
            {user?<>
            <p className='text-center my-10'>{user.email}</p>
            
            </>:''}
        </div>
    );
};

export default Home;