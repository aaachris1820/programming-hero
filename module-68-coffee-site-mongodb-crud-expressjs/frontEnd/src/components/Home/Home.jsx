import React from 'react';
import Banner from './Banner';
import Qualities from './Qualities';
import PopularProducts from './PopularProducts';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Qualities></Qualities>
            <PopularProducts></PopularProducts>
        </main>
    );
};

export default Home;