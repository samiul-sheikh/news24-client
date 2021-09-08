import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">News24</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" as={Link}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/international" className="nav-link me-5" as={Link}>International</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sports" className="nav-link me-5" as={Link}>Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/entertainment" className="nav-link me-5" as={Link}>Entertainment</Link>
                        </li>
                        {/* {loggedInUser.email ?
                            <li className="nav-item">
                                <Link to="/login" className="nav-link me-5" as={Link}>{loggedInUser.email}</Link>
                            </li> :
                            <li className="nav-item">
                                <Link to="/login" className="nav-link me-5" as={Link}>Login</Link>
                            </li>
                        } */}
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link" as={Link}>Dashboard</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button className="btn btn-outline-success ms-5" type="submit">Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;