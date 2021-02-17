import React, { useEffect, useState } from 'react'
import PostedJobs from './PostedJobs';
import {baseUrl} from '../../conf';
import Axios from 'axios';
import './styles/recruiter.css';

const Recruiter = () => {
    const [postedJobs, setPostedJobs] = useState({});
    const ls = JSON.parse(localStorage.getItem('data'));

    async function getPostedJobs(){
        try{
            const data = await Axios.get(`${baseUrl}/recruiters/jobs`,
            {
                headers:{
                    'Authorization': ls[0]?.token
                }
            });
            setPostedJobs(data);
        }
        catch (error){
            console.log(error);
        }
    }

    window.onload = function() {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }

    useEffect(() => {
        getPostedJobs();
        window.onload();
    },[])

    return (
        <>
            <div className="ceil"></div>
            <PostedJobs data={postedJobs}/>
        </>
    )
}

export default Recruiter
