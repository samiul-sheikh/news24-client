import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    background: '#F4FDFB',
    height: '100%'
}

const Dashboard = () => {

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                    <p>add news feature is only for admin</p>
                </div>
                <div className="col-md-5">
                    <p>add admin feature is only for admin</p>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;