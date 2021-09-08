import React, { useEffect, useState } from 'react';
import NewsDetail from '../NewsDetail/NewsDetail';

const Newses = () => {

    const [news, setNews] = useState([]);

    // display all news from server
    useEffect(() => {
        fetch('https://newsbd-24.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <section className="container mt-5">
            <div className="text-center text-primary">
                <h2>Today's News</h2>
            </div>
            <div className="row mt-3">
                {
                    news.map(news => <NewsDetail news={news}></NewsDetail>)
                }
            </div>
        </section>
    );
};

export default Newses;