import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopNewses from '../Homepage/TopNewses/TopNewses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Reuse/Footer/Footer';

const NewsDetail = () => {

    const { id } = useParams();

    const [newsInfo, setNewsInfo] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/info/' + id)
            .then(res => res.json())
            .then(data => setNewsInfo(data))
    }, [id])

    return (
        <div className="container mt-3">
            <div className="row d-flex">
                <div className="col-md-8">
                    <h1>{newsInfo.title}</h1>
                    <div className="d-flex">
                        <h6>By: {newsInfo.author}</h6>
                        <h6 className="mx-2">21/10/2021</h6>
                        <h6>Category: {newsInfo.category}</h6>
                    </div>
                    <div className="d-flex mb-2">
                        <button type="button" className="shadow-none mx-1" variant="success" size="sm">
                            <FontAwesomeIcon icon={faFacebook} />
                        </button>
                        <button type="button" className="shadow-none mx-1" variant="success" size="sm">
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>
                        <button type="button" className="shadow-none mx-1" variant="success" size="sm">
                            <FontAwesomeIcon icon={faInstagram} />
                        </button>
                    </div>
                    <img src={newsInfo.imageURL} className="img-fluid" alt="" />
                    <div className="mt-2">
                        <p>{newsInfo.description}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <TopNewses />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NewsDetail;