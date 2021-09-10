import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newses = () => {

    const [news, setNews] = useState([]);

    // display all newses from server
    useEffect(() => {
        fetch('http://localhost:8000/news')
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
                    news.map(news => <News news={news}></News>)
                }
            </div>
        </section>
    );
};

export default Newses;