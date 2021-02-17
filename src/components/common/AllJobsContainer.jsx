import React from 'react'
import './styles/alljobs.css'
import Axios from 'axios';
import {baseUrl} from '../../conf';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const AllJobsContainer = ({data,applied}) => {

    const {description="",id="",location="",title=""} = data;
    const ls = JSON.parse( localStorage.getItem("data"));
    async function apply() {  
        try{
            await Axios.post(`${baseUrl}/candidates/jobs`,
            {jobId: id},
            {
                headers: { 
                    'Authorization' :  ls[0]?.token
                }
            });

            alert("Your apllication is submited");
        }
        catch (error){
            console.log(error);
            alert("There was some problem submitting your application, please submit later.");
        }
    }

    const handleApply = () => {
        apply();
    }

    return (
        <div className="container">
            <p className="title">{title}</p>
            <p className="desc">{description}</p>

            <div className="actions">
                <p className="location"><LocationOnOutlinedIcon style={{fontSize:"15px",color:"#43AFFF"}}/> {location}</p>
                
                {
                    applied 
                    ?
                    null
                    :
                    <button className="apply" onClick={handleApply}>
                        Apply
                    </button>  
                }
            </div>
        </div>
    )
}

export default AllJobsContainer
