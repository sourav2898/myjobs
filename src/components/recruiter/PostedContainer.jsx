import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import './styles/postedContainer.css';
import Axios from 'axios';
import {baseUrl} from '../../conf';
import Applications from './Applications';

const PostedContainer = ({data}) => {
    const [details, setDetails] = useState({});
    const [view, setView] = useState(false);
    const {description="",id="",location="",title=""} = data;
    const ls = JSON.parse( localStorage.getItem("data"));
    // console.log(ls);

    async function getDetails(){
        try{
            const det = await Axios.get(`${baseUrl}/recruiters/jobs/${id}/candidates`,
            {
                headers:{
                    'Authorization': ls[0]?.token
                }
            })
            setDetails(det);
            // console.log(det?.data?.data, "res");
            setView(true);
        }
        catch (error){
            console.log(error,"error");
        }
        
    }


    const viewApplication = () => {
         getDetails();
    }

    const close =() => {
        setView(false);
    }

    return (
        <>
            <div className="container">
                <p className="job_title">{title}</p>
                <p className="desc">{description}</p>

                <div className="actions">
                    <p className="location"><LocationOnOutlinedIcon style={{fontSize:"15px",color:"#43AFFF"}}/> {location}</p>
                    <button className="apply" onClick={viewApplication}>
                        View Application
                    </button>  
                </div>
            </div>
            {
                view 
                ?
                <Applications close={close} data={details}/>    
                :
                null
            }
        </>
    )
}

export default PostedContainer
