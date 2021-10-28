import React, { useEffect, useState } from 'react';
import News from '../News/News';
import TopNewses from '../TopNewses/TopNewses';

const Newses = () => {

    const [news, setNews] = useState([]);

    // display all newses from server
    useEffect(() => {
        fetch('https://secret-temple-33863.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <section className="mt-2">
            <div className="row d-flex">
                <div className="col-md-8">
                    <h3 className="text-center text-primary mb-4">Today's News</h3>
                    <div className="row">
                        {
                            news.length === 0 && <div class="spinner-border text-primary mx-auto my-auto" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                        {
                            news.map(news => <News news={news} key={news.title}></News>)
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

export default Newses;