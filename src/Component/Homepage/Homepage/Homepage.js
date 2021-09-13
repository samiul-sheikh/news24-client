import React from 'react';
import Header from '../Header/Header';
import Newses from '../Newses/Newses';
import TopNewses from '../TopNewses/TopNewses';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Newses />
            <TopNewses />
        </div>
    );
};

export default Homepage;