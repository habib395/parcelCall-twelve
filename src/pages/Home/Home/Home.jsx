import React from 'react';
import Banner from '../Banner/Banner';
import OurFeature from '../OurFeature/OurFeature';
import Statistic from '../Statistic/Statistic';
import TopDelivery from '../TopDelivery/TopDelivery';
import Review from '../../Shared/Review';
import BookParcel from '../../Shared/Navbar/BookParcel';
import About from '../About';

const Home = () => {
    return (
        <div className='dark:bg-gray-900'>
            <Banner></Banner>
            {/* Our Features Section */}
            <OurFeature></OurFeature>
            {/* statistic section */}
            <Statistic></Statistic>
            {/* Total booked parcel */}
            <BookParcel></BookParcel>
            {/* Reviews Details */}0
            <Review></Review>
            {/* Top Delivery Man  */}
            <TopDelivery></TopDelivery>
            {/* About section */}
            <About></About>
        </div>
    );
};

export default Home;