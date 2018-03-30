import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';

const EngineeringInProgressComponent = (props) => {
    return (
        <div>
            {
                props.selected ?
                    <div>
                        <h3>Jobs In Progress:</h3>
                        <Table selectable={false}>
                            <TableHead>
                                <TableCell>Job Number</TableCell>
                                <TableCell>Job Name</TableCell>
                                <TableCell>PM</TableCell>
                                <TableCell>Priority</TableCell>
                                <TableCell>Status Comments</TableCell>
                                <TableCell>Hours</TableCell>
                                <TableCell>Estimated Hours</TableCell>
                                <TableCell>Hours to Completion</TableCell>
                                <TableCell>Total Hours to Date</TableCell>
                                <TableCell>Date Completed</TableCell>
                            </TableHead>
                            {
                                Object.entries(props.data).map(([index, job]) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{job.JobNumberID}</TableCell>
                                            <TableCell>{job.JobName}</TableCell>
                                            <TableCell>{job.PM}</TableCell>
                                            <TableCell>{job.Priority}</TableCell>
                                            <TableCell>{job.StatusComments}</TableCell>
                                            <TableCell>{job.Hours}</TableCell>
                                            <TableCell>{job.EstimatedHours}</TableCell>
                                            <TableCell>{job.HoursToCompletion}</TableCell>
                                            <TableCell>{job.TotalHoursToDate}</TableCell>
                                            <TableCell>{job.DateCompleted}</TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                        </Table>
                    </div> :
                    null
            }
        </div>
    )
};

export default withRouter(connect((state) => ({
        data: state.engSchedule.data,
        selected: state.engSchedule.selected
    }),
)(EngineeringInProgressComponent))