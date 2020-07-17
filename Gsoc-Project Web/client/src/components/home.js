import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Link to="/register">Register</Link><br/>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default Home;