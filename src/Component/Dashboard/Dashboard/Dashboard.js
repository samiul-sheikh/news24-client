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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ab?</p>
                </div>
                <div className="col-md-5">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, exercitationem?</p>                </div>
            </div>
        </section>
    );
};

export default Dashboard;