import React from 'react';
import './News.css';
import { useHistory } from 'react-router-dom';

const News = ({ news }) => {

    const history = useHistory();
    // console.log(news);

    const newsDetail = id => {
        const url = `/info/${id}`;
        history.push(url);
    }

    return (
        <div className="col-lg-4 col-md-6 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="card-img">
                        <img src={news.imageURL} className="card-img-top" alt="..." />
                    </div>
                    <h5 className="card-title">{news.title}</h5>
                    <button onClick={() => newsDetail(news._id)} type="button" className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    );
};

export default News;