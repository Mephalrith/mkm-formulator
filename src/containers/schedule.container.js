import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';
import * as scheduleActions from '../actions/schedule.actions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class ScheduleBody extends Component {

    handleSort = (key, value) => {
        if (key !== 'asc') {
            this.props.sortAsc(value)
        } else {
            this.props.sortDesc(value)
        }
    };

    render() {
        return (
            <Table className='schedule-override' selectable={false}>
                <TableHead>
                    <TableCell
                        className='name-schedule-header'
                        sorted={this.props.sortedScheduleName}
                        onClick={() => this.handleSort(this.props.sortedScheduleName, 'name')}>
                        Name
                    </TableCell>
                    <TableCell
                        className='initials-schedule-header'
                        onClick={() => this.handleSort(this.props.sortedScheduleName, 'name')}>
                        Initials
                    </TableCell>
                    <TableCell
                        className='startTime-schedule-header'
                        sorted={this.props.sortedStartTime}
                        onClick={() => this.handleSort(this.props.sortedStartTime, 'startTime')}>
                        Start Time
                    </TableCell>
                    <TableCell
                        className='endTime-schedule-header'
                        sorted={this.props.sortedEndTime}
                        onClick={() => this.handleSort(this.props.sortedEndTime, 'endTime')}>
                        End Time
                    </TableCell>
                </TableHead>
                {
                    this.props.employees.map((person, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className='name-schedule-column'>{person.name}</TableCell>
                                <TableCell
                                    className='initials-schedule-column'>{person.initials}</TableCell>
                                <TableCell
                                    className='startTime-schedule-column'>{person.startTime}</TableCell>
                                <TableCell
                                    className='endTime-schedule-column'>{person.endTime}</TableCell>
                            </TableRow>
                        );
                    })
                }
            </Table>
        );
    }
}

export default withRouter(connect((state) => ({
        employees: state.schedule.employees,
        sortedScheduleName: state.schedule.sortedScheduleName,
        sortedStartTime: state.schedule.sortedStartTime,
        sortedEndTime: state.schedule.sortedEndTime
    }),
    (dispatch) => ({
        sortAsc: (prop) => dispatch(scheduleActions.sortAsc(prop)),
        sortDesc: (prop) => dispatch(scheduleActions.sortDesc(prop))
    })
)(ScheduleBody))