import React, { useEffect, useState } from 'react';
import TopNews from '../TopNews/TopNews';

const TopNewses = () => {
    const [articles, setArticles] = useState([]);


    const [topNews, setTopNews] = useState([]);

    // display top newses from server
    useEffect(() => {
        fetch('https://secret-temple-33863.herokuapp.com/topNews')
            .then(res => res.json())
            .then(data => setTopNews(data))
    }, [])
    return (
        <div className="container">
            <div className="text-center text-primary mb-4">
                <h3>Top News</h3>
            </div>
            <div className="row">
                {
                    topNews.map(topNews => <TopNews topNews={topNews}></TopNews>)
                }
            </div>
        </div>
    );
};

export default TopNewses;