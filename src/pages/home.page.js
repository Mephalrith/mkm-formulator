import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {push} from 'react-router-redux';
import * as homeActions from '../actions/home.actions';
import * as scheduleActions from '../actions/schedule.actions';
import Layout from "react-toolbox/lib/layout/Layout";
import Panel from "react-toolbox/lib/layout/Panel";
import AppBar from "react-toolbox/lib/app_bar/AppBar";
import FontIcon from "react-toolbox/lib/font_icon/FontIcon";
import NavDrawerComponent from "../components/navDrawer.component";
import HomeBody from "../containers/home.container";
import ProjectInfoBody from "../containers/projectInfo.container";
import FormsBody from "../containers/forms.container";
import InOutBody from "../containers/inOut.container";
import logo from '../assets/mkmLogo.svg';
import Sidebar from "react-toolbox/lib/layout/Sidebar";
import ScheduleBody from '../containers/schedule.container';

class HomePage extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.startLoadingSheet();
    };

    handleClick(route) {
        this.props.pushRoute(route);
        this.props.hideSidebar();
    };

    render() {
        return (
            <div>
                <div className='header-override'>
                    <img src={logo} alt="logo"/>
                </div>

                <Layout>
                    <Panel>
                        <AppBar className='appBar-override' flat>
                            <p>{this.props.title}</p>
                            {
                                (this.props.local.pathname.substring(1).toLowerCase().match("inoutlog")) ?
                                    <a onClick={() => this.props.showSidebar()}>
                                        Employee Schedules {(this.props.sidebarActive) ?
                                        <FontIcon value={'chevron_left'}/> :
                                        <FontIcon value={'chevron_right'}/>}
                                    </a> : null
                            }
                        </AppBar>

                        <div className='navDrawer-override'>
                            <NavDrawerComponent/>
                        </div>

                        <Switch>
                            <Route exact path={"/"} component={HomeBody} title={"Home"}/>
                            <Route exact path={"/projectinfo"} component={ProjectInfoBody}/>
                            <Route exact path={"/forms"} component={FormsBody}/>
                            <Route exact path={"/inoutlog"} component={InOutBody}/>
                            <Route render={() => <div>Not Found</div>}/>
                        </Switch>
                    </Panel>

                    <Sidebar
                        active={this.props.sidebarActive}
                        onOverlayClick={() => this.props.hideSidebar()}
                        width={10}
                        right
                    >
                        {
                            (this.props.loading) ?
                                <p>Loading...</p> : <ScheduleBody/>
                        }
                    </Sidebar>

                </Layout>
            </div>
        )
    }
}

export default withRouter(connect((state) => ({
        loading: state.schedule.loading,
        local: state.router.location,
        sidebarActive: state.home.sidebarActive,
        title: state.state.currentTitle
    }),
    (dispatch) => ({
        pushRoute: (route) => dispatch(push(route)),
        startLoadingSheet: () => dispatch(scheduleActions.startLoadingSheet()),
        showSidebar: () => dispatch(homeActions.showSidebar()),
        hideSidebar: () => dispatch(homeActions.hideSidebar())
    })
)(HomePage))

