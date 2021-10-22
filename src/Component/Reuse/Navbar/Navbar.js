import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                News Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/sports" className="dropdown-item" as={Link}>Sports</Link>
                                <Link to="/international" className="dropdown-item" as={Link}>International</Link>
                                <li><hr className="dropdown-divider" /></li>
                                <Link to="/topNews" className="dropdown-item" as={Link}>Breaking News</Link>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link" as={Link}>Dashboard</Link>
                        </li>
                        {loggedInUser.email ?
                            <li className="nav-item">
                                <Link to="/login" className="nav-link me-5" as={Link}>{loggedInUser.name}</Link>
                            </li> :
                            <li className="nav-item">
                                <Link to="/login" className="nav-link me-5" as={Link}>Login</Link>
                            </li>
                        }
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;