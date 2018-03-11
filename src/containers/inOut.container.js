import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';
import * as inOutActions from '../actions/inOut.actions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from "react-toolbox/lib/button/Button";
import Checkbox from "react-toolbox/lib/checkbox/Checkbox";
import AddEntryForm from '../components/addEntry.component';
import * as StateActions from "../actions/state.actions";

class InOutBody extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "In and Out Log";
        this.props.loadTitle("In and Out Log")
    }

    handleSort = (key, value) => {
        if (key !== 'asc') {
            this.props.sortAsc(value)
        } else {
            this.props.sortDesc(value)
        }
    };

    render() {
        return (
            <div className={'body-override'}>

                <div className='inout-override'>
                    <Table onRowSelect={(input) => {
                        this.props.employees.map((person, index) => {
                            if (input.includes(index)) {
                                if (person.selected) {
                                    this.props.selectRow(null);
                                } else {
                                    this.props.selectRow(index);
                                }
                            }
                            return 0;
                        });
                    }}>

                        <TableHead>
                            <TableCell
                                className='name-inout-header'
                                sorted={this.props.sortedInOutName}
                                onClick={() => this.handleSort(this.props.sortedInOutName, 'name')}>
                                Name
                            </TableCell>
                            <TableCell
                                className='initials-inout-header'
                                onClick={() => this.handleSort(this.props.sortedInOutName, 'name')}>
                                Initials
                            </TableCell>
                            <TableCell
                                className='outTime-inout-header'
                                sorted={this.props.sortedOutTime}
                                onClick={() => this.handleSort(this.props.sortedOutTime, 'outTime')}>
                                Out Time
                            </TableCell>
                            <TableCell
                                className='inTime-inout-header'
                                sorted={this.props.sortedInTime}
                                onClick={() => this.handleSort(this.props.sortedInTime, 'inTime')}>
                                In Time
                            </TableCell>
                            <TableCell className='notes-inout-header'>Notes</TableCell>
                            <TableCell className='fieldBag-inout-header'>Field Bag</TableCell>
                            <TableCell className='vehicle-inout-header'>Vehicle</TableCell>
                            <TableCell className='returned-inout-header'>Returned</TableCell>
                        </TableHead>

                        {
                            this.props.employees.map((person, index) => {
                                return (
                                    <TableRow key={index} selected={person.selected}>
                                        <TableCell className='name-inout-column'
                                                   onClick={() => this.props.selectRow(index)}>
                                            {
                                                person.selected ?
                                                    <Button
                                                        className='remove-button'
                                                        icon='remove'
                                                        flat
                                                        onClick={() => this.props.removeEntry(index)}
                                                    /> : null
                                            }
                                            {person.name}
                                        </TableCell>
                                        <TableCell className='initials-inout-column'>{person.initials}</TableCell>
                                        <TableCell className='outTime-inout-column'>{person.outTime}</TableCell>
                                        <TableCell className='inTime-inout-column'>{person.inTime}</TableCell>
                                        <TableCell className='notes-inout-column'>{person.notes}</TableCell>
                                        <TableCell className='fieldBag-inout-column'>{person.fieldBag}</TableCell>
                                        <TableCell className='vehicle-inout-column'>{person.vehicle}</TableCell>
                                        <TableCell className='returned-inout-column'>
                                            <Checkbox className='returned-inout-checkbox'
                                                      checked={person.checked}
                                                      onChange={() => this.props.checkboxSelect(index)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </Table>
                    <AddEntryForm/>

                </div>
            </div>
        );
    }
}

export default withRouter(connect((state) => ({
        employees: state.inOut.employees,
        sortedInOutName: state.inOut.sortedInOutName,
        sortedOutTime: state.inOut.sortedOutTime,
        sortedInTime: state.inOut.sortedInTime
    }),
    (dispatch) => ({
        loadTitle: (title) => dispatch(StateActions.setTitle(title)),
        selectRow: (index) => dispatch(inOutActions.rowSelect(index)),
        removeEntry: (index) => dispatch(inOutActions.removeEntry(index)),
        sortAsc: (prop) => dispatch(inOutActions.sortAsc(prop)),
        sortDesc: (prop) => dispatch(inOutActions.sortDesc(prop)),
        checkboxSelect: (index) => dispatch(inOutActions.checkboxSelect(index))
    })
)(InOutBody))

