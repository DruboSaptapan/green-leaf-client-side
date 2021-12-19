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
            <JoinNow></JoinNow>
            <Planning></Planning>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;