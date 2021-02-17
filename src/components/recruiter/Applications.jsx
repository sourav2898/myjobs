import React from 'react'
import './styles/applications.css'
import Avatar from '@material-ui/core/Avatar';

const Applicants = ({value}) => {
    return (
            <div className="applicants">
                <div className="applicants_header">
                    <Avatar alt={value.name} src="/broken-image.jpg" className="applicants_avatar"/>
                    <div>
                        <p>{value.name}</p>
                        <p>{value.email}</p>
                    </div>
                </div>
                <div className="applicants_skills">
                    <p>Skills</p>
                    <p>{value.skills}</p>
                </div>
            </div>
    )
}


const Applications = ({data,close}) => {

    return (
        <div className="application_container">
            <div className="application_header">
                <p>Application for this job</p>
                <span onClick={close}>x</span>
            </div>
            <div className="count">
                <p>Totla {data?.data?.data?.length || 0} applications</p>
            </div>
            <div className="applications">
                {
                    data?.data?.data?.map((value,index) => {
                        return <Applicants key={index} value={value}/>
                    })
                }
            </div>
        </div>
    )
}

export default Applications
