import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as StateActions from "../actions/state.actions";

class DraftScheduleBody extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Drafting Schedule";
        this.props.loadTitle("Drafting Schedule")
    }

    render() {
        return (
            <div className={'body-override'}>
                <p>Drafting Scheduling Sheet</p>
            </div>
        );
    }
}


export default withRouter(connect((state) => ({}),
    (dispatch) => ({
        loadTitle: (title) => dispatch(StateActions.setTitle(title)),
    })
)(DraftScheduleBody))