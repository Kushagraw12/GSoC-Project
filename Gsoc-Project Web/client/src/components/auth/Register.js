import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errorMessage: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState(
                { errorMessage: nextProps.errors }
            )
        }
    }

    // On Text Change in text field
    onChange(e) {
        this.setState(
            {[e.target.name]: e.target.value}
        );
    }

    // On submitting the form
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);

        // console.log(newUser);
    }

    render() {
        const {errorMessage} = this.state;

        // const {user} = this.props.auth;
        return (
            <div className="App container">
                {/*<p>{this.state.apiResponse}</p>*/}
                <div className="Login col-lg-6 col-md-6 col-sm-6">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <Link to='/login'><Button style={{borderRadius:8, width:'max-content'}} className="ghost" id="signIn">Sign In</Button></Link>
                    </div>
                </div>
                <div className="Singup col-lg-6 col-md-6">
                    <div className="SignCont">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1>Create Account</h1>
                            <br/>
                            {/*<span>or use your email for registration</span>*/}
                            <input type="text"
                                   style={{marginBottom:6}}
                                   className={classNames('form-control form-control-lg', {
                                       'is-invalid':errorMessage.name
                                   })}
                                   placeholder="Name"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.onChange}
                            />
                            {errorMessage.name && (<div className="invalid-feedback float-left">{errorMessage.name}</div>)}
                            <input type="email"
                                   style={{marginBottom:6}}
                                   className={classNames('form-control form-control-lg', {
                                       'is-invalid':errorMessage.email
                                   })}
                                   placeholder="Email"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.onChange}
                            />
                            {errorMessage.email && (<div className="invalid-feedback">{errorMessage.email}</div>)}
                            <input type="password"
                                   style={{marginBottom:6}}
                                   className={classNames('form-control form-control-lg', {
                                       'is-invalid':errorMessage.password
                                   })}
                                   placeholder="Password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.onChange}
                            />
                            {errorMessage.password && (<div className="invalid-feedback">{errorMessage.password}</div>)}
                            <input type="password2"
                                   style={{marginBottom:6}}
                                   className={classNames('form-control form-control-lg', {
                                       'is-invalid':errorMessage.password2
                                   })}
                                   placeholder="Confirm Password"
                                   name="password2"
                                   value={this.state.password2}
                                   onChange={this.onChange}
                            />
                            {errorMessage.password2 && (<div className="invalid-feedback">{errorMessage.password2}</div>)}
                            <button style={{marginTop: 10, borderRadius:8}}>Sign Up</button>
                        </form>

                    </div>


                </div>
                <Link to='/'><Button className="back">Go Back to Home Page</Button></Link>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));