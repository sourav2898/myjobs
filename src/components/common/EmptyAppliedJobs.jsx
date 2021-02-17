import React from 'react'
import NoteIcon from '@material-ui/icons/Note';
import './styles/emptyAppliedJobs.css';
import {useHistory} from 'react-router-dom';

const EmptyAppliedJobs = () => {

    let history = useHistory();

    const alljobs = () => {
        history.push('/home');
    }

    return (
        <div className="empty_applied">
            <NoteIcon style={{width:"106px", height:"106px",color:"#A9AFBC"}}/>
            <p className="ins">Your applied jobs will show here!</p>
            <button class="all_jobs" onClick={alljobs}>
                See All Jobs
            </button>
        </div>
    )
}

export default EmptyAppliedJobs
