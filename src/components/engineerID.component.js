import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Input from 'react-toolbox/lib/input/Input';
import Button from "react-toolbox/lib/button/Button";
import * as EngineeringScheduleActions from "../actions/engSchedule.actions";

class EngineerIDComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            engineerID: '',
        }
    }

    handleChange = (key, value) => {
        this.setState({...this.state, [key]: value});
    };

    handleSubmit = () => {
        this.props.loadConnection(this.state.engineerID);
        this.props.handleSelected();
        this.setState({engineerID: ''});
    };

    render() {
        return (
            <ul className='job-input-override'>
                <li className='job-search-input'>
                    <Input
                        type='engineerID'
                        hint='Engineer ID'
                        name='engineerID'
                        value={this.state.engineerID}
                        onChange={(value) => this.handleChange('engineerID', value)}
                    />
                </li>
                < Button
                    className='search-button'
                    icon='search'
                    flat
                    onClick={() => this.handleSubmit()}
                />
            </ul>
        );
    }
}

export default withRouter(connect((state) => ({
        data: state.engSchedule.data,
        selected: state.engSchedule.selected
    }),
    (dispatch) => ({
        loadConnection: (key) => dispatch(EngineeringScheduleActions.startConnection(key)),
        handleSelected: (selected) => dispatch(EngineeringScheduleActions.setSelected(selected))
    })
)(EngineerIDComponent))