import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Input from 'react-toolbox/lib/input/Input';
import Button from "react-toolbox/lib/button/Button";
import * as ProjectInfoActions from "../actions/projectInfo.actions";

class JobNumberComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobNumber: '',
        }
    }

    handleChange = (key, value) => {
        this.setState({...this.state, [key]: value});
    };

    handleSubmit = () => {
        this.props.loadConnection(this.state.jobNumber);
        this.props.handleSelected();
        this.setState({jobNumber: ''});
    };

    render() {
        return (
            <ul className='job-input-override'>
                <li className='job-search-input'>
                    <Input
                        type='jobNumber'
                        hint='Job Number'
                        name='jobNumber'
                        value={this.state.jobNumber}
                        onChange={(value) => this.handleChange('jobNumber', value)}
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
        data: state.projectInfo.data,
        selected: state.projectInfo.selected
    }),
    (dispatch) => ({
        loadConnection: (key) => dispatch(ProjectInfoActions.startConnection(key)),
        handleSelected: (selected) => dispatch(ProjectInfoActions.setSelected(selected))
    })
)(JobNumberComponent))