import React from 'react';

const TopNews = ({ news }) => {
    return (
        <div className="row d-flex align-items-center mb-2">
            <div className="col-md-4">
                <img src={news.urlToImage} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8">
                <h6>{news.title}</h6>
            </div>
        </div>
    );
};          

export default TopNews;