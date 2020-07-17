import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';


import './App.css';

import Home from './components/home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from "./store";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Route exact path="/" component={Home}/>
                        <div className="container">
                            <Route exact path='/register' component={Register}/>
                            <Route exact path='/login' component={Login}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
