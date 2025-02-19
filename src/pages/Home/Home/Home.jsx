import React from 'react';
import Banner from '../Banner/Banner';
import OurFeature from '../OurFeature/OurFeature';
import Statistic from '../Statistic/Statistic';
import TopDelivery from '../TopDelivery/TopDelivery';
import Review from '../../Shared/Review';
import BookParcel from '../../Shared/Navbar/BookParcel';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;