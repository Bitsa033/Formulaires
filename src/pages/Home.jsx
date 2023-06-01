import React from 'react';
import Layout from '../components/Layout';
import '../dist/css/all.css'
const Home = () => {
    return (
        <div>
            <Layout />
            <div className="col-md-4 offset-3">
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;