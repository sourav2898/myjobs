import React from 'react'
import './styles/reset.css'
import {useFormik} from 'formik';
import Axios from 'axios';
import {baseUrl} from '../../conf';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const resetValidation = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be greater than 6")
      .required("Enter password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")],
        "Password does not match")
        .required("Field is mandatory"),
});

const ResetPassword = () => {
    let history = useHistory();
    const {
        handleSubmit,
        handleChange,
        values,
        errors
      } = useFormik({
        initialValues: {
            password: "",
            confirmPassword:"",
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGlzQGdtYWlsLmNvbSIsImlhdCI6MTU5MTEyOTg1NSwiZXhwIjoxNTkxMTMzNDU1fQ.qWTTb-HDhFKsjZbYaKZlLeosKbJQBRERX-pQumFIak4"
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: resetValidation,
        onSubmit: async () => {
            try{
                const res = await Axios.get(`${baseUrl}/auth/resetpassword`,values,
                {
                    headers: { 
                        'Content-Type' : 'application/json' 
                    }
                });
                alert(res);
                history.push('/login');
            }
            catch (error) {
                alert(error);
            }   
        } 
    })

    return (
        <>
            <div className="ceil"></div>
            <div className="reset">
                <p className="header">Reset your password?</p>
                <p className="des">Enter your new password below.</p>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label>
                            New Password
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
                        {errors && <p className="error">{errors?.password}</p>}
                    </div>
                    <div className="inputs">
                        <label>
                            Confirm New Password
                        </label>
                        <input 
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                        {errors && <p className="error">{errors?.confirmPassword}</p>}
                    </div>
                    <div className="submit">
                        <button
                            type="submit"
                            className="login"
                        >
                            Reset 
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ResetPassword
