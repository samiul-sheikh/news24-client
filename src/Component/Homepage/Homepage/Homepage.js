import React from 'react';
import AddNews from '../../AddNews/AddNews';
import Navbar from '../../Reuse/Navbar/Navbar';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <AddNews />
        </div>
    );
};

export default Homepage;