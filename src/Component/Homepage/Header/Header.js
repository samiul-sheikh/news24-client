import React from 'react';
import tv from '../../../images/banner-images/tv.png';
import headphone from '../../../images/banner-images/headphone.png';
import xbox from '../../../images/banner-images/xbox.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide panda-slide mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex align-items-center p-5">
                            <div className="col-md-7">
                                <h1>Mega CD TV For Sports</h1>
                                <p>This is the best tv in the world for people who just want to waste time in front of tv.</p>
                                <h3>$1200</h3>
                                <button className="btn btn-warning">Buy Now</button>
                            </div>
                            <div className="col-md-5">
                                <img src={tv} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex align-items-center p-5">
                            <div className="col-md-7">
                                <h1>Cool Dude Headphone</h1>
                                <p>This is thee best headphone in the world for people who just want to waste time in front of funky world
                                </p>
                                <h3>$420</h3>
                                <button className="btn btn-warning">Buy Now</button>
                            </div>
                            <div className="col-md-5">
                                <img src={headphone} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex align-items-center p-5">
                            <div className="col-md-7">
                                <h1>X-Box for your living room</h1>
                                <p>This is thee best x-borg in the world for people who just want to waste time in front of fake sports
                                </p>
                                <h3>$600</h3>
                                <button className="btn btn-warning">Buy Now</button>
                            </div>
                            <div className="col-md-5">
                                <img src={xbox} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Header;