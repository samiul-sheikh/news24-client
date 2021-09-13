import React from 'react';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.png';
import img4 from '../../../images/img4.jpg';
import TopNews from '../TopNews/TopNews';

const newsData = [
    {
        title: "Bangladesh's new data protection act, brittle shield or blunt swordt",
        image: img1
    },
    {
        title: "India players refused to play fifth Test against England, says Ganguly",
        image: img2
    },
    {
        title: "The Aurthohin reunion that melted hearts",
        image: img3
    },
    {
        title: "Sporshia to feature in Puja’s ‘Ashchey Ma Durga’",
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