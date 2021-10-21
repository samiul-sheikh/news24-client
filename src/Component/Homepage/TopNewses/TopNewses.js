import React, { useEffect, useState } from 'react';
import TopNews from '../TopNews/TopNews';

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