import React,{useEffect, useState} from 'react'
import {baseUrl} from '../../conf';
import Axios from 'axios';
import Jobs from './Jobs';
import {useHistory} from 'react-router-dom';
import EmptyAppliedJobs from '../common/EmptyAppliedJobs';

const AppliedJobs = () => {

    let history = useHistory();
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
        // console.log(localStorage);
        if(localStorage.length>0){
            // console.log(localStorage);
            getAppliedJobs();
            // console.log(data);
        }
        else{
            history.push(`/`);
        }
        // console.log(jobs);
    }, [])

    return (
        <>
            <div className="ceil"></div>
            <Jobs data={appliedJobs} applied={true}/>
        </>
    )
}

export default AppliedJobs
