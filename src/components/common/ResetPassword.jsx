import React from 'react'
import './styles/reset.css'
import {useFormik} from 'formik';

const ResetPassword = () => {

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
            new: "",
            confirm:"",
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
                            name="new"
                            id="new"
                            value={values.new}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="inputs">
                        <label>
                            Confirm New Password
                        </label>
                        <input 
                            type="password"
                            name="confirm"
                            id="confirm"
                            value={values.confirm}
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
                            Reset 
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ResetPassword
