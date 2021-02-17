import React from 'react'
import {useFormik} from 'formik';
import conf,{baseUrl} from '../../conf';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import * as Yup from "yup";
import './styles/postJob.css';

const postJobValidation = Yup.object().shape({
    title: Yup.string()
    .required("Enter job title"),
    location: Yup.string()
    .required("Enter job location"),
    description: Yup.string()
    .required("Enter job description"),
});

const PostJob = () => {
    const ls = JSON.parse( localStorage.getItem("data"));

    const {
        handleSubmit,
        handleChange,
        errors,
        values
      } = useFormik({
        initialValues: {
            title: "",
            description: "",
            location:"",
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: postJobValidation,
        onSubmit:async () => {
            try{
                const res = await Axios.post(`${baseUrl}/jobs/`,values,
                 {
                     headers: { 
                         'Authorization' : ls[0]?.token 
                     }
                 }
                );
                alert("Your job is posted");
                values.title="";values.description="";values.location="";
             }catch (error) {
                 console.log(error);
             }
         
        }
    });

    return (
        <>
            <div className="ceil"></div>
            <div className="post_job_form">
                <form onSubmit={handleSubmit}>
                    <p className="post_job_header">Post a Job</p>
                    <div className="post_job_inputs">
                        <label>
                            Job Title*
                        </label>
                        <input 
                            type="text"
                            name="title"
                            id="title"
                            value={values.title}
                            onChange={handleChange}
                            placeholder="Enter job title"
                            required
                        />
                        {errors.title && <p className="error">{errors.title}</p>}
                    </div>
                    <div className="post_job_inputs">
                        <label>
                            Description*
                        </label>
                        <textarea 
                            type="text"
                            name="description"
                            id="description"
                            value={values.description}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Enter job description"
                            required
                        />
                        {errors.description && <p className="error">{errors.description}</p>}
                    </div>
                    <div className="post_job_inputs">
                        <label>
                            Location*
                        </label>
                        <input 
                            type="text"
                            name="location"
                            id="location"
                            value={values.location}
                            onChange={handleChange}
                            placeholder="Enter job location"
                            required
                        />
                        {errors.location && <p className="error">{errors.location}</p>}
                    </div>
                    <div className="post_job_submit">
                        <button
                            type="submit"
                        >
                            Post 
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PostJob
