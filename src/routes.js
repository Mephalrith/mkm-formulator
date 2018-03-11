import React from 'react';
import {Route, Switch} from 'react-router';
import HomePage from './pages/home.page';

const Routes = (props) => {
    return (
        <Switch>
            <Route path={"/"} component={HomePage}/>
        </Switch>
    );
};

export default Routes