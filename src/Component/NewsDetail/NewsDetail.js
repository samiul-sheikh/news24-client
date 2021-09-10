import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {

    const { id } = useParams();

    const [newsInfo, setNewsInfo] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/info/' + id)
            .then(res => res.json())
            .then(data => setNewsInfo(data))
    }, [id])

    return (
        <div className="container">
            <h1>{newsInfo.title}</h1>
            <h6>By: {newsInfo.author}</h6>
            <p>Category: {newsInfo.category}</p>
            <img src={newsInfo.imageURL} className="img-fluid" alt="" />
            <p>{newsInfo.description}</p>
        </div>
    );
};

export default NewsDetail;