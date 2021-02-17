import React from 'react'
import PostedContainer from './PostedContainer';

const PostedJobs = ({data}) => {

    const jobs = data?.data?.data?.data;
    console.log(jobs);

    return (    
        <div className="posted_jobs">
            <p className="title">Jobs posted by you</p>
            <div className="all_posted_jobs">
                {
                    jobs?.map((value) => {
                        return <PostedContainer key={value.id} data={value}/>
                    })
                }
            </div>
        </div>
    )
}

export default PostedJobs
