import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TopNewses from '../Homepage/TopNewses/TopNewses';

const International = () => {

    // const history = useHistory();
    // // console.log(news);

    // const newsDetail = id => {
    //     const url = `/info/${id}`;
    //     history.push(url);
    // }

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('https://secret-temple-33863.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, [])

    return (
        <section className="mt-2">
            <div className="row d-flex">
                <div className="col-md-8">
                    <h3 className="text-center text-primary mb-4">International News</h3>
                    <h3>{allNews.title}</h3>
                    <div className="row">
                        {/* <div className="col-lg-4 col-md-6 mb-3">
                            <Link to={`/info/${allNews._id}`} style={{ textDecoration: "none", color: "inherit" }} onClick={() => newsDetail} className="card">
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={allNews.imageURL} className="card-img-top" alt="..." />
                                    </div>
                                    <h5 className="card-title mt-4">{allNews.title}</h5>
                                </div>
                            </Link>
                        </div> */}
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