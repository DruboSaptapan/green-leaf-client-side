import React from 'react';
import JoinNow from '../JoinNow/JoinNow';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Planning from './Planning/Planning';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Planning></Planning>
            <Reviews></Reviews>
            <JoinNow></JoinNow>
        </div>
    );
};

export default Home;