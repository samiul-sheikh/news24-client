import React from 'react';

const TopNews = ({ news }) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={news.image} className="card-img-top" alt="..." />
                <div className="card-title">
                    <h5>{news.title}</h5>
                </div>
            </div>
        </div>
    );
};

export default TopNews;