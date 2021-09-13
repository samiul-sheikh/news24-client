import React from 'react';

const TopNews = ({ news }) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={news.image} className="card-img-top" alt="..." />
                <div className="card-title">
                    <p>{news.title}</p>
                </div>
            </div>
        </div>
    );
};

export default TopNews;