import React from 'react';
import Banner from '../Banner/Banner';
import OurFeature from '../OurFeature/OurFeature';
import Statistic from '../Statistic/Statistic';
import TopDelivery from '../TopDelivery/TopDelivery';
import Review from '../../Shared/Review';
import BookParcel from '../../Shared/Navbar/BookParcel';
import About from '../About';
import AllDeliveryMan from './../../../components/Dashboard/Sidebar/Admin/AllDeliveryMan';

const Home = () => {
    return (
        <div className='dark:bg-gray-900'>
            <Banner></Banner>
            {/* Our Features Section */}
            <OurFeature></OurFeature>
            {/* statistic section */}
            <Statistic></Statistic>
            {/* Reviews Details */}
            <Review></Review>
            {/* About section */}
            <About></About>
            {/* All delivery Man */}
            <AllDeliveryMan></AllDeliveryMan>
            {/* Top Delivery Man  */}
            <TopDelivery></TopDelivery>
        </div>
    );
};

export default Home;