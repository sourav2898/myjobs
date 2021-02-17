import React from 'react'
import './styles/jobs.css'
import Container from '../common/AllJobsContainer';
import Pagination from "react-js-pagination";
import TablePagination from '@material-ui/core/TablePagination';
import EmptyAppliedJobs from '../common/EmptyAppliedJobs';

const Jobs = ({data,applied}) => {

    const jobs = data?.data?.data;
    // console.log(jobs, applied);

    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
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
