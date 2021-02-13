import React from 'react'
import './styles/login.css';
import {useFormik} from 'formik';

const Login = () => {

    const {
        handleSubmit,
        handleChange,
        errors,
        touched,
        setFieldTouched,
        dirty,
        values
      } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: () => {
            console.log(values);
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
                    </div>
                    <div className="inputs">
                        <label className="password">
                            Password
                            <a href="/forgot-password">Forgot Your Password?</a>
                        </label>
                        <input 
                            type="text"
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
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
