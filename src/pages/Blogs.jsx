import React from 'react';
import Layout from '../components/Layout';
import '../dist/css/all.css'
const Blogs = () => {
    return (
        <div>
            <Layout />
            <div className="col-md-6 offset-3">
                <h1>Blogs</h1>
                <br />
                <div className="card mb-4 box-shadow">
                    
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
            </div>
            {/* ./col */}
            <div className="col-md-6 offset-3">
                <div className="card mb-4 box-shadow">
                    
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
            </div>
            {/* ./col */}
        </div>
    );
};

export default Blogs;