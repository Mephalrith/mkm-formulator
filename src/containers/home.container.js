import React, {Component} from 'react';
import * as StateActions from "../actions/state.actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class HomeBody extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Home";
        this.props.loadTitle("Home")
    }

    render() {

        return (
            <div className={'body-override'}>
                <p>Home Page</p>
                <br/>
                <p>Welcome to MKM & Associates!</p>
            </div>
        );
    }
}

export default withRouter(connect((state) => ({}),
    (dispatch) => ({
        loadTitle: (title) => dispatch(StateActions.setTitle(title)),
    })
)(HomeBody))