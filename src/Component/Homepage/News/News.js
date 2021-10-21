import React from 'react';
import './News.css';
import { Link, useHistory } from 'react-router-dom';

const News = ({ news }) => {

    const history = useHistory();
    // console.log(news);

    const newsDetail = id => {
        const url = `/info/${id}`;
        history.push(url);
    }

    return (
        <div className="col-lg-4 col-md-6 mb-3">
            <Link to={`/info/${news._id}`} style={{ textDecoration: "none", color: "inherit" }} onClick={() => newsDetail} className="card">
                <div className="card-body">
                    <div className="card-img">
                        <img src={news.imageURL} className="card-img-top" alt="..." />
                    </div>
                    <h5 className="card-title mt-4">{news.title}</h5>
                </div>
            </Link>
        </div>
    );
};

export default News;