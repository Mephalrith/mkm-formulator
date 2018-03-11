import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as StateActions from "../actions/state.actions";
import JobNumberComponent from "../components/jobNumber.component";
import ProjectManagerComponent from "../components/projectManager.component";

class FormsBody extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Forms";
        this.props.loadTitle("Forms")
    }

    render() {
        return (
            <div className={'body-override'}>
                <JobNumberComponent/>
                <ProjectManagerComponent/>
                <div className='separator'/>
                <p>Forms</p>
            </div>
        );
    }
}


export default withRouter(connect((state) => ({}),
    (dispatch) => ({
        loadTitle: (title) => dispatch(StateActions.setTitle(title)),
    })
)(FormsBody))