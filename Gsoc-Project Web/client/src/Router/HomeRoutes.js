import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../components/home';
import Login from '../components/auth/Login';
import Register from "../components/auth/Register";
import Timeline from "../components/timeline";

const Routes = (props) => {
    return(
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/timeline' exact component = {Timeline}/>
        </Switch>
    )
}

export default Routes;
