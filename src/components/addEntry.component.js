import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as inOutActions from '../actions/inOut.actions';
import Input from 'react-toolbox/lib/input/Input';
import Button from "react-toolbox/lib/button/Button";

class AddEntryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            initials: '',
            outTime: '',
            inTime: '',
            notes: '',
            fieldBag: '',
            vehicle: ''
        };
    }

    handleChange = (key, value) => {
        this.setState({...this.state, [key]: value});
    };

    handleSubmit = () => {
        this.props.addEntry(
            this.state.name,
            this.state.initials,
            this.state.outTime,
            this.state.inTime,
            this.state.notes,
            this.state.fieldBag,
            this.state.vehicle
        );
        this.setState({name: '', initials: '', outTime: '', inTime: '', notes: '', fieldBag: '', vehicle: ''});
    };

    render() {
        return (
            <div>
                <div className='separator'/>
                <ul className='input-override'>
                    <li className='name-input'>
                        <Input
                            type='name'
                            hint='Name'
                            name='name'
                            value={this.state.name}
                            onChange={(value) => this.handleChange('name', value)}
                        />
                    </li>
                    <li className='initials-input'>
                        <Input
                            type='initials'
                            hint='Initials'
                            name='initials'
                            value={this.state.initials}
                            onChange={(value) => this.handleChange('initials', value)}
                        />
                    </li>
                    <li className='outTime-input'>
                        <Input
                            type='outTime'
                            hint='Out Time'
                            name='outTime'
                            value={this.state.outTime}
                            onChange={(value) => this.handleChange('outTime', value)}
                        />
                    </li>
                    <li className='inTime-input'>
                        <Input
                            type='inTime'
                            hint='In Time'
                            name='inTime'
                            value={this.state.inTime}
                            onChange={(value) => this.handleChange('inTime', value)}
                        />
                    </li>
                    <li className='notes-input'>
                        <Input
                            type='notes'
                            hint='Notes'
                            name='notes'
                            value={this.state.notes}
                            onChange={(value) => this.handleChange('notes', value)}
                        />
                    </li>
                    <li className='fieldBag-input'>
                        <Input
                            type='fieldBag'
                            hint='Field Bag'
                            name='fieldBag'
                            value={this.state.fieldBag}
                            onChange={(value) => this.handleChange('fieldBag', value)}
                        />
                    </li>
                    <li className='vehicle-input'>
                        <Input
                            type='vehicle'
                            hint='Vehicle'
                            name='vehicle'
                            value={this.state.vehicle}
                            onChange={(value) => this.handleChange('vehicle', value)}
                        />
                    </li>
                    <Button
                        className='add-button'
                        icon='add'
                        flat
                        onClick={() => this.handleSubmit()}
                    />
                </ul>
            </div>
        );
    }
}

export default withRouter(connect((state) => ({
        nameList: state.schedule.nameArray,
        initialsList: state.schedule.initialsArray
    }),
    (dispatch) => ({
        addEntry: (name, initials, outTime, inTime, notes, fieldBag, vehicle) =>
            dispatch(inOutActions.addEntry(name, initials, outTime, inTime, notes, fieldBag, vehicle)),
    })
)(AddEntryForm))