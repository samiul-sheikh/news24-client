import React from 'react';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img4 from '../../../images/img4.jpg';
import TopNews from '../Topnews/TopNews';

const newsData = [
    {
        title: 'Hotel Management',
        image: img1
    },
    {
        title: 'E-commerce Website',
        image: img2
    },
    {
        title: 'Restaurant System',
        image: img4
    },
    {
        title: 'Restaurant System',
        image: img4
    }
]


const TopNewses = () => {
    return (
        <div className="container">
            <div className="text-center text-primary">
                <h2>Top news</h2>
            </div>
            <div className="row mt-3">
                {
                    newsData.map(news => <TopNews news={news}></TopNews>)
                }
            </div>
        </div>
    );
};

export default TopNewses;