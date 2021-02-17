import React,{useEffect, useState} from 'react'
import {baseUrl} from '../../conf';
import Axios from 'axios';
import Jobs from './Jobs';
import {useHistory} from 'react-router-dom';

const Home = () => {
    let history = useHistory();
    const [jobs,setJobs] = useState({});
    const ls = JSON.parse( localStorage.getItem("data"));
    const [loading,isLoading] = useState(false);

    async function getJobs() {
        try{
            isLoading(true);
            const data = await Axios.get(`${baseUrl}/candidates/jobs`,{
                headers: { 
                    'Authorization' :  ls[0]?.token
                }
            });
            setJobs(data);
            isLoading(false);
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        // console.log(localStorage);
        if(localStorage.length>0){
            // console.log(localStorage);
            getJobs();
            // console.log(ls[0]);
        }
        else{
            history.push(`/`);
        }
        // console.log(jobs);
    }, [])

    return (
        <>
            <div className="ceil"></div>
            {
                loading && "Loading....."
            }
            <Jobs data={jobs} applied={false}/>
        </>
    )
}

export default Home
