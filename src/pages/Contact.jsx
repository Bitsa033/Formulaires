import React from 'react';
import Layout from '../components/Layout';
import '../dist/css/all.css'
import $ from 'jquery'
// import { useForm } from "react-hook-form";
import { useState } from "react";
const Contact = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // console.log(watch("example"));

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [result, setResult] = useState("");
    
    const handleChange = (e) => {
        setName(e.target.value);
    };
    
    const handleChange2 = (e) => {
        setPhone(e.target.value);
    };
    
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                console.log(data);
                setResult(data);
            },
        });
    }
    return (
        <div>
            <Layout />
            <div className="col-md-4 offset-3">
                <h1>Contact</h1>
                <br />
                <form action="" method="post" onSubmit={handleSumbit}>

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
                </form>
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                {/* register your input into the hook by invoking the "register" function */}
                {/* <input defaultValue="test" {...register("example")} /> */}
                
                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                
                {/* <input type="submit" /> */}
                {/* </form> */}

            </div>
        </div>
    );
};

export default Contact;