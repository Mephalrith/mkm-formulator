import React, {Component} from 'react';
import List from "react-toolbox/lib/list/List";
import ListItem from "react-toolbox/lib/list/ListItem";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {push} from 'react-router-redux'

class NavDrawerComponent extends Component {

    render() {
        return (

            <List className='list-override' selectable ripple>
                <ListItem
                    caption='Home'
                    leftIcon='home'
                    onClick={() => {
                        this.props.pushRoute("/");
                    }}/>
                <ListItem
                    caption='Project Information'
                    leftIcon='view_list'
                    onClick={() => {
                        this.props.pushRoute("/projectinfo");
                    }}/>
                <ListItem
                    caption='Forms'
                    leftIcon='description'
                    onClick={() => {
                        this.props.pushRoute("/forms");
                    }}/>
                <ListItem
                    caption='In Out Log'
                    leftIcon='people'
                    onClick={() => {
                        this.props.pushRoute("/inoutlog");
                    }}/>
            </List>
        );
    }
}

export default withRouter(connect((state) => ({
    }),
    (dispatch) => ({
        pushRoute: (route) => dispatch(push(route)),
    })
)(NavDrawerComponent))