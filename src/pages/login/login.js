import React, { Component } from "react";
// import { Field } from "redux-form";

import axios from "../../axios-store";

class Login extends Component {

    state = {
        username: '',
        password: '',
        errorMessage: null,
    };

    onUsernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value,
        });
    }

    onPasswordChangeHandler = (event) => {
        this.setState({
            password: event.target.value,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.state;

        let requestBody = {username, password};

        axios.post('/auth/authenticateuser', requestBody).then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.data.token);
            console.log(localStorage.getItem('token'));
            this.props.history.push('/store');
        }).catch(response => {
            console.log(response);
            this.setState({ errorMessage: response.data });
        });
    }

    render() {
        return (
            <div className="row main">
                <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                    <div className="panel-heading">
                        <div className="panel-title text-center">
                            <h2 className="title">Login</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="main-login main-center">
                        <form
                            className="form-horizontal"
                        >
                            <div className="form-group">
                                <label className="control-label">Email</label>
                                <div>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-at" aria-hidden="true" />
                                        </span>
                                        {/* <Field type="text" name="username" component="input" /> */}
                                        <input type="text" placeholder="username" value={this.state.username} onChange={this.onUsernameChangeHandler} />
                                    </div>
                                </div>
                                <span className="help-block">
                                    Please provide valid email address
                                </span>
                            </div>

                            <div className="form-group">
                                <label className="control-label">Password</label>
                                <div>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-unlock-alt" aria-hidden="true" />
                                        </span>
                                        {/* <Field type="password" name="password" component="input" /> */}
                                        <input type="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChangeHandler} />
                                    </div>
                                    <span className="help-block">Password is required</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick={this.onSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login