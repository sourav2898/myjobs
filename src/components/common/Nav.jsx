import React,{useEffect, useState} from 'react'
import './styles/nav.css';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

const Nav = () => {
    
    const [allowed, isAllowed] = useState(true);
    const [candidate, isCandidate] = useState(false);
    const [recruiter, isRecruiter] = useState(false);
    // const [brand, setBrand] = useState("/");
    const [ls, setLs] = useState({});

    const logout = () => {
        localStorage.removeItem("data");
        // setBrand('/');
    }

    const Candidate = ({name}) => {
        return (
            <div className="candidate"> 
                <a href="/applied-jobs" className="apply">Applied Jobs</a>
                <Avatar alt={name} src="/broken-image.jpg" className="avatar"/>
                <div className="drop"> 
                    <ArrowDropDownOutlinedIcon className="dropdown"/>
                    <div className="dropdown-content">
                        <a href="/" onClick={logout}>Logout</a>
                    </div>
                </div>
            </div>
        )
    }

    const Recruiter = ({name}) => {
        return (
            <div className="candidate"> 
                <a href="/post-job" className="apply">Post a Job</a>
                <Avatar alt={name} src="/broken-image.jpg" className="avatar"/>
                <div className="drop"> 
                    <ArrowDropDownOutlinedIcon className="dropdown"/>
                    <div className="dropdown-content">
                        <a href="/" onClick={logout}>Logout</a>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        const path = window.location.pathname;
        const ls = JSON.parse( localStorage.getItem("data"));

        if(path==='/login' || path==='/signup' || ls) isAllowed(false);
        if(ls && ls[0]?.userRole == 1){
            isCandidate(true);
            setLs(ls);
            // setBrand("/home");
        } 
        if(ls && ls[0]?.userRole == 0){
            isRecruiter(true);
            setLs(ls);
            // setBrand("/home");
        }
        // console.log("data", ls);
    }, [])

    return (
        <div className="navbar">
            <a href="/" className="brand"><span>My</span>Jobs</a>
            {
                allowed && <a href="/login" className="login">Login/Signup</a> 
            }
            {
                candidate ? <Candidate name={ls[0]?.name}/> : null
            }
            {
                recruiter ? <Recruiter name={ls[0]?.name} /> : null
            }
        </div>
    )
}

export default Nav
