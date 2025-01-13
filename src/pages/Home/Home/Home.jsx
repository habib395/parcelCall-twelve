import React from 'react';
import Banner from '../Banner/Banner';
import OurFeature from '../OurFeature/OurFeature';
import Statistic from '../Statistic/Statistic';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* Our Features Section */}
            <OurFeature></OurFeature>
            {/* statistic section */}
            <Statistic></Statistic>
        </div>
    );
};

export default Home;