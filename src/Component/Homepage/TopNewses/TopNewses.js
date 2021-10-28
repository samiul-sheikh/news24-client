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
                    topNews.length === 0 && <div class="spinner-border text-primary mx-auto my-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    topNews.map(topNews => <TopNews topNews={topNews} key={topNews.title}></TopNews>)
                }
            </div>
        </div>
    );
};

export default TopNewses;