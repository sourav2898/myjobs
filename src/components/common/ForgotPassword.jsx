import React from 'react'
import './styles/forgot.css';
import {useFormik} from 'formik';

const ForgotPassword = () => {

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
            <div className="forgot">
                <p className="header">Forgot your password?</p>
                <p className="des">Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
                <form onSubmit={handleSubmit}>

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
                <div className="submit">
                    <button
                        type="submit"
                        className="login"
                    >
                        Submit 
                    </button>
                </div>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword
