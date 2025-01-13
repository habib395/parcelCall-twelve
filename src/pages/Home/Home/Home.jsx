import React from 'react';
import Banner from '../Banner/Banner';
import OurFeature from '../OurFeature/OurFeature';
import Statistic from '../Statistic/Statistic';
import TopDelivery from '../TopDelivery/TopDelivery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* Our Features Section */}
            <OurFeature></OurFeature>
            {/* statistic section */}
            <Statistic></Statistic>
            {/* Top Delivery Man  */}
            <TopDelivery></TopDelivery>
        </div>
    );
};

export default Home;