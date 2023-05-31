import React from 'react';
import Banner from './Banner';
import Qualities from './Qualities';
import PopularProducts from './PopularProducts';
import TestCustomHook from './TestCustomHook';
import Test2 from './Test2';

const Home = () => {
    
    return (
        <main>
            <Banner></Banner>
            <Qualities></Qualities>
            <PopularProducts></PopularProducts>
            <TestCustomHook></TestCustomHook>
            <Test2></Test2>
        </main>
    );
};

export default Home;