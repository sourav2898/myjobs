import React from 'react'
import './styles/forgot.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const validate = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
});


const ForgotPassword = () => {

    const {
        handleSubmit,
        handleChange,
        errors,
        values
      } = useFormik({
        initialValues: {
            email: "",
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: validate,
        onSubmit: () => {
            alert(values);
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
                    {errors && <p className="error">{errors.email}</p>}
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
