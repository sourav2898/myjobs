import React,{useState} from 'react'
import './styles/signup.css';
import { useHistory } from "react-router-dom";
import {useFormik} from 'formik';
import Axios from 'axios';
import {baseUrl} from '../../conf';
import * as Yup from "yup";

const signUpValidation = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Enter email"),
    password: Yup.string()
      .min(6, "Password must be greater than 6")
      .required("Enter password"),
    name: Yup.string()
      .required("Field is mandatory"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")],
        "Password does not match")
        .required("Field is mandatory"),
});
  

const SignUp = () => {
    let history = useHistory();
    const [userRole, setUserRole] = useState(0);

    const {
        handleSubmit,
        handleChange,
        errors,
        values
      } = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            confirmPassword: "",
            skills:"",
            userRole: userRole,
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: signUpValidation,
        onSubmit: async () => {
            try{
                let res = await Axios.post(`${baseUrl}/auth/register`,
                        values,
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
            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <p className="header">SignUp</p>
                    <div className="selector">
                        <label>I'm a*</label>
                        <div className="category">
                        {
                            userRole === 1 
                            ? 
                            <a className='opts' style={{background:"#43AFFF",border:"1px solid #43AFFF"}} onClick={() => setUserRole(1)}>
                                Recruiter
                            </a>
                            :
                            <a className='opts' onClick={() => setUserRole(1)}>
                                Recruiter
                            </a>
                        }
                            
                        {
                            userRole === 0
                            ?
                            <a className="opts" style={{background:"#43AFFF",border:"1px solid #43AFFF"}} onClick={() => setUserRole(0)}>
                                Candidate
                            </a>   
                            :
                            <a className="opts" onClick={() => setUserRole(0)}>
                                Candidate
                            </a>
                        }
                        </div>
                    </div>
                    <div className="inputs">
                        <label>
                            Full Name*
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
                        {errors && <p className="error">{errors?.name}</p>}
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
                        {errors && <p className="error">{errors?.email}</p>}
                    </div>
                    <div className="password">
                        <div className="inputs">
                            <label>
                                Create Password*
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
                                Confirm Password*
                            </label>
                            <input 
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                placeholder="Enter your confirm password"
                                required
                            />
                            {errors && <p className="error">{errors?.confirmPassword}</p>}
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
                        />
                    </div>
                    <div className="submit">
                        <button
                            type="submit"
                            className="login"
                            onClick={handleSubmit}
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
