import React from 'react'
import './styles/login.css';
import {useFormik} from 'formik';
import conf,{baseUrl} from '../../conf';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import * as Yup from "yup";

const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Enter email"),
    password: Yup.string()
      .min(6, "Enter password greater than 6 characters")
      .required("Enter password"),
});
  
const Login = () => {

    let history = useHistory();
    const validate = () => {
        if(values.email!=="" && values.password!=="") return true;
        return false;
    }

    const {
        handleSubmit,
        handleChange,
        errors,
        values
      } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: loginValidation,
        onSubmit: async () => {
            if(validate){
                try{
                   const res = await Axios.post(`${baseUrl}/auth/login`,values,
                    {
                        headers: { 
                            'Content-Type' : 'application/json' 
                        }
                    }
                    );
                    // console.log(res);
                    const id = res?.data?.data?.id;
                    const userRole = res?.data?.data?.userRole;
                    // if(id){
                    //     history.push(`/home/${id}`);
                    // }
                    const data = [];
                    if(id){
                        data.push(res?.data?.data);
                        localStorage.setItem("data",JSON.stringify(data));
                    }
                    if(userRole === 1){
                        history.replace(`/home`);
                    }
                    else{
                        history.replace('/home-recruiter');
                    }
                    
                    // console.log(localStorage);
                }catch (error) {
                    // console.log(error);
                    values.email="";
                    values.password="";
                    alert(error);
                }
            }
        } 
    })
    
    return (
        <>
            <div className="ceil"></div>
            <div className="signin">
                <form onSubmit={handleSubmit}>
                    <p className="header"> Login </p>
                    <div className="inputs">
                        <label>
                            Email Address
                        </label>
                        <input 
                            type="text"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                        {errors && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="inputs">
                        <label className="password">
                            Password
                            <a href="/forgot-password">Forgot Your Password?</a>
                        </label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                        {errors && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="submit">
                        <button
                            type="submit"
                            className="login"
                        >
                            Login 
                        </button>
                    </div>
                </form>

                <div className="new_account">
                    <p>New to MyJobs? <a href="/signup"> Create an account </a></p>
                </div>
            </div>
        </>
    )
}

export default Login
