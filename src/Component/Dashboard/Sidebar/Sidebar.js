import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faGripHorizontal, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://secret-temple-33863.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh", left: "0" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/admin/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/addNews" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add News</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/setting" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faCog} /> <span>Manage News</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;