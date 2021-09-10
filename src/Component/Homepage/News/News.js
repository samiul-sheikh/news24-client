import React from 'react';
import { useHistory } from 'react-router-dom';

const News = ({ news }) => {

    const history = useHistory();
    // console.log(news);

    const newsDetail = id => {
        const url = `/info/${id}`;
        history.push(url);
    }

    return (
        <div className="col-md-3 text-center py-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src={news.imageURL} className="card-img-top cover" alt="..." style={{ height: '250px' }} />
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <button onClick={() => newsDetail(news._id)} type="button" className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    );
};

export default News;