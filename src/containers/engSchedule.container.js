import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as StateActions from "../actions/state.actions";
import EngineerIDComponent from "../components/engineerID.component";
import EngineeringInProgressComponent from "../components/engineeringInProgress.component";

class EngScheduleBody extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Engineering Schedule";
        this.props.loadTitle("Engineering Schedule")
    }

    render() {
        return (
            <div className={'body-override'}>
                <EngineerIDComponent/>
                <EngineeringInProgressComponent/>
            </div>
        );
    }
}


export default withRouter(connect((state) => ({
        loading: state.engSchedule.loading,
        selected: state.engSchedule.selected
    }),
    (dispatch) => ({
        loadTitle: (title) => dispatch(StateActions.setTitle(title)),
    })
)(EngScheduleBody))