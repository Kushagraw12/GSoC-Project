import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/authActions';



class Timeline extends Component {
    render() {
        return (
            <div>
                This is the timeline isnt it cool
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps, {logoutUser})(withRouter(Timeline));
