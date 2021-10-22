import React from 'react';

const TopNews = ({ topNews }) => {
    return (
        <div className="row d-flex align-items-center mb-2">
            <div className="col-md-4">
                <img src={topNews.imageURL} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8">
                <h6>{topNews.title}</h6>
            </div>
        </div>
    );
};          

export default TopNews;