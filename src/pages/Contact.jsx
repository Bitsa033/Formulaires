import React from 'react';
import Layout from '../components/Layout';
import '../dist/css/all.css'
// import $ from 'jquery'
// import { useState } from "react";
const Contact = () => {
    return (
        <div>
            <Layout />
            <div className="col-md-4 offset-3">
                <h1>Contact</h1>
                <br />
                <div className="form-group">
                    <input type="text" className='form-control' placeholder='Name' />
                </div>
                <br />
                <div className="form-group">
                    <input type="email" className='form-control' placeholder='Email' />
                </div>
                <br />
                <div className="form-group">
                    <input type="tel" className='form-control' placeholder='Phone' />
                </div>
                <br />
                <div className="form-group">
                    <textarea type="text" className='form-control' placeholder='Type your message'>
                    </textarea>
                </div>
                <br />
                <div className="form-group">
                    <input type="submit" className='form-control btn btn-success' />
                </div>

            </div>
        </div>
    );
};

export default Contact;