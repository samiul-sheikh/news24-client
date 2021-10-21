import React, { useEffect, useState } from 'react';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.png';
import img4 from '../../../images/img4.jpg';
import TopNews from '../TopNews/TopNews';

// const newsData = [
//     {
//         title: "Bangladesh's new data protection act, brittle shield or blunt swordt",
//         image: img1
//     },
//     {
//         title: "India players refused to play fifth Test against England, says Ganguly",
//         image: img2
//     },
//     {
//         title: "The Aurthohin reunion that melted hearts",
//         image: img3
//     },
//     {
//         title: "Sporshia to feature in Puja’s ‘Ashchey Ma Durga’",
//         image: img4
//     }
// ]


const TopNewses = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=12780e2f84114c368bbdfdbd5b41113e';
        fetch(url)
            .then(res => res.json())
            .then(data =>setArticles(data.articles))
    }, [])
    return (
        <div className="container">
            <div className="text-center text-primary mb-4">
                <h3>Top News</h3>
            </div>
            <div className="row">
                {
                    articles.map(news => <TopNews news={news}></TopNews>)
                }
            </div>
        </div>
    );
};

export default TopNewses;