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
            date: data.date,
            time: data.time,
            imageURL: imageURL
        };

        const url = `https://secret-temple-33863.herokuapp.com/addNews`;
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
                    {/* <div className="form-group mb-3">
                        <label for="exampleInputCategory" class="form-label">News Category</label>
                        <input type="text" ref={register({ required: true })} name="category" placeholder="Enter Category" className="form-control" />
                        {errors.category && <span className="text-danger">this field is required</span>}
                    </div> */}
                    <div className="form-group mb-3">
                        <label for="exampleInputDescription" class="form-label">News Category</label>
                        <select className="form-control" name="category" ref={register({ required: true })} >
                            <option disabled={true} value="Not set">Select a Category</option>
                            <option value="Sports">Sports</option>
                            <option value="Country">Country</option>
                            <option value="International">International</option>
                            <option value="Business">Business</option>
                        </select>
                        {errors.category && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputImage" class="form-label">News Image</label>
                        <input onChange={handleImageUpload} type="file" ref={register({ required: true })} name="image" placeholder="Upload an Image" className="form-control" />
                        {errors.image && <span className="text-danger">new field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputDate" class="form-label">Pick a Date</label>
                        <input type="date" ref={register({ required: true })} name="date" placeholder="Enter Date" className="form-control" />
                        {errors.date && <span className="text-danger">this field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputTime" class="form-label">Pick a Time</label>
                        <input type="time" ref={register({ required: true })} name="time" placeholder="Enter Time" className="form-control" />
                        {errors.time && <span className="text-danger">this field is required</span>}
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