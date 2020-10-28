import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../Views/home';
import Login from '../Views/auth/Login';
import Register from "../Views/auth/Register";
import SkillsForm from "../Views/skillsForm";

const Routes = (props) => {
    return(
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/skills' exact component={SkillsForm}/>
        </Switch>
    )
}

export default Routes;
