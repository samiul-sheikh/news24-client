import React, { useEffect, useState } from 'react';
import News from '../Homepage/News/News';
import TopNewses from '../Homepage/TopNewses/TopNewses';

const International = () => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('https://secret-temple-33863.herokuapp.com/news')
            .then(res => res.json())
            .then(data => {
                const international = data.filter(cat => cat.category === "International"
                )
                setAllNews(international)
            })
    }, [])

    return (
        <section className="mt-2">
            <div className="row d-flex">
                <div className="col-md-8">
                    <h3 className="text-center text-primary mb-4">International News</h3>
                    <div className="row">
                        {
                            allNews.map(news => <News news={news} key={news.title}></News>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <TopNewses />
                </div>
            </div>
        </section >
    );
};

export default International;