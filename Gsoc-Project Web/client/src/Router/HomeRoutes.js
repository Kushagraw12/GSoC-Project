import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../components/home';
import Login from '../components/auth/Login';
import Register from "../components/auth/Register";
import Timeline from "../components/timeline/timeline";
import Firebase from "../components/Firebase/login";

const Routes = (props) => {
    return(
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/anon_login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/timeline' exact component = {Timeline}/>
            <Route path='/login' exact component = {Firebase}/>
        </Switch>
    )
}

export default Routes;
