import React,{useEffect, useState} from 'react'
import {baseUrl} from '../../conf';
import Axios from 'axios';
import Jobs from './Jobs';

const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState({});
    const ls = JSON.parse( localStorage.getItem("data"));

    async function getAppliedJobs() {
        try{
            const data = await Axios.get(`${baseUrl}/candidates/jobs/applied`,{
                headers: { 
                    'Authorization' :  ls[0]?.token
                }
            });
            setAppliedJobs(data);
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getAppliedJobs();
    }, [])

    return (
        <>
            <div className="ceil"></div>
            <Jobs data={appliedJobs} applied={true}/>
        </>
    )
}

export default AppliedJobs
