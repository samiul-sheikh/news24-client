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
        <div className="text-center">
            <h2>News Detail</h2>
            <img src={newsInfo.imageURL} alt="" />
            <h5>{newsInfo.title}</h5>
            <p>{newsInfo.author}</p>
            <p>{newsInfo.description}</p>
            <p>{newsInfo.category}</p>
        </div>
    );
};

export default NewsDetail;