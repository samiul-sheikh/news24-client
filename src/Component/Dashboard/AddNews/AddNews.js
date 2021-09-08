import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddNews = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {

        const newsData = {
            title: data.title,
            author: data.author,
            description: data.description,
            category: data.category,
            imageURL: imageURL
        };

        const url = `http://localhost:8000/addNews`;
        // console.log(newsData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsData)
        })
            .then(res => console.log('server side res ', res))
    };

    const handleImageUpload = news => {
        console.log(news.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b8a0776f79e4a37c3c341318f0f61e22')
        imageData.append('image', news.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h5 className="text-center">Add News Here</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputTitle" class="form-label">News Title</label>
                        <input type="text" ref={register({ required: true })} name="title" placeholder="Enter Title" className="form-control" />
                        {errors.title && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputAuthor" class="form-label">Author Name</label>
                        <input type="text" ref={register({ required: true })} name="author" placeholder="Enter Author Name" className="form-control" />
                        {errors.author && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputDescription" class="form-label">News Description</label>
                        <input type="text" ref={register({ required: true })} name="description" placeholder="Enter Description" className="form-control" />
                        {errors.description && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputCategory" class="form-label">News Category</label>
                        <input type="text" ref={register({ required: true })} name="category" placeholder="Enter Category" className="form-control" />
                        {errors.category && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputImage" class="form-label">News Image</label>
                        <input onChange={handleImageUpload} type="file" ref={register({ required: true })} name="image" placeholder="Upload an Image" className="form-control" />
                        {errors.image && <span className="text-danger">new field is required</span>}
                    </div>
                    <div className="form-group d-grid mx-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddNews;