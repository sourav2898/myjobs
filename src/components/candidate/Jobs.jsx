import React from 'react'
import './styles/jobs.css'
import Container from '../common/AllJobsContainer';
import EmptyAppliedJobs from '../common/EmptyAppliedJobs';

const Jobs = ({data,applied}) => {

    const jobs = data?.data?.data;
    // console.log(jobs, applied);
    return (
        <div className="jobs">
        {
            applied 
            ?
            <p className="header">Jobs applied by you</p>
            :
            <p className="header">Jobs for you</p>
        }
            <div className="alljobs">
                {
                    applied
                    ?
                    (
                        jobs 
                        ?
                        jobs?.map((value) => {
                            return <Container data={value} applied={true} key={value?.id} />
                        })
                        :
                        <EmptyAppliedJobs />
                    )
                    :
                    jobs?.map((value) => {
                        return <Container data={value} applied={false} key={value?.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Jobs
