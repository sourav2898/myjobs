import React from 'react'
import './styles/signup.css';
import {useFormik} from 'formik';

const SignUp = () => {

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
            name: "",
            confirmPassword: "",
            skills:"",
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
            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <p className="header">SignUp</p>
                    <div className="selector">
                        <label>I'm a*</label>
                        <div className="category">
                            <a className="opts">
                                <p>Recruiter</p>
                            </a>
                            <a className="opts">
                                <p>Candidate</p>
                            </a>
                        </div>
                    </div>
                    <div className="inputs">
                        <label>
                            Name*
                        </label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="inputs">
                        <label>
                            Email Address*
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
                    <div className="password">
                        <div className="inputs">
                            <label>
                                Create Password*
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
                        <div className="inputs">
                            <label>
                                Confirm Password*
                            </label>
                            <input 
                                type="text"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                placeholder="Enter your confirm password"
                                required
                            />
                        </div>
                    </div>
                    <div className="inputs">
                        <label>
                            Skills
                        </label>
                        <input 
                            type="text"
                            name="skills"
                            id="skills"
                            value={values.skills}
                            onChange={handleChange}
                            placeholder="Enter your comma sepearted skills"
                            required
                        />
                    </div>
                    <div className="submit">
                        <button
                            type="submit"
                            className="login"
                        >
                            Sign Up 
                        </button>
                    </div>
                </form>
                <div className="new_account">
                    <p>Have an account? <a href="/login"> Login </a></p>
                </div>
            </div>
        </>
    )
}

export default SignUp
