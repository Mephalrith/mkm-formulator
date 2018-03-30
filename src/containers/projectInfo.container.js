import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as StateActions from "../actions/state.actions";
import ProjectInfoComponent from "../components/projectInfo.component";
import ProjectManagerComponent from "../components/projectManager.component";
import JobNumberComponent from "../components/jobNumber.component";

class ProjectInfoBody extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Project Information";
        this.props.loadTitle("Project Information")
    }

    render() {
        return (
            <div className='body-override'>
                <JobNumberComponent/>
                <ProjectManagerComponent/>
                <ProjectInfoComponent/>
            </div>
        );
    }
}


export default withRouter(connect((state) => ({
        loading: state.projectInfo.loading,
        selected: state.projectInfo.selected
    }),
    (dispatch) => ({
        loadTitle: (title) => dispatch(StateActions.setTitle(title)),
    })
)(ProjectInfoBody))