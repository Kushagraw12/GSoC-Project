import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/authActions';
import {Button} from 'react-bootstrap';

import "./home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.logoutUser();

        // console.log(newUser);
    }

    render() {
        return (
            <div>
                <h1 className='wel'>Hey there!</h1>
                <Link to="/register"><Button className='reg'>Register</Button></Link><br/>
                <Link to="/login"><Button className='wg'>Login with Google</Button></Link> <br />
                <Link to="/anon_login"><Button className='wog'>Login without Google</Button></Link> <br />
                <Link to="/timeline"><Button className='tim'>View Timeline</Button></Link> <br />
                {/*<Button onClick={this.onSubmit}>Logout</Button>*/}
            </div>
        );
    }
}

Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Home));
