import React, { Component } from 'react';
import axios from "../../axios-store";
import { Link } from "react-router-dom";

class Register extends Component {

  state = {
    username: '',
    password: '',
    email: '',
    errorMessage: null,
    successMessage: null
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

  onEmailChangeHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { username, password, email } = this.state;

    let requestBody = { username, password, email };

    axios.post('/users', requestBody).then(response => {
      this.setState({ successMessage: 'Success! Please Login!' });
    }).catch(() => {
      this.setState({ errorMessage: 'Registration failed!' });
    });
  }

  render() {
    return (
      <div className="row main">
        <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
          <div className="panel-heading">
            <div className="panel-title text-center">
              <h2 className="title">Register here</h2>
              <hr />
            </div>
          </div>
          <div className="main-login main-center">
            <form
              className="form-horizontal"
            >
              <div>
                <input type="text" placeholder="username"
                  value={this.state.username} onChange={this.onUsernameChangeHandler} />
              </div>
              <div>
                <input type="email" placeholder="email"
                  value={this.state.email} onChange={this.onEmailChangeHandler} />
              </div>
              <div>
                <input type="password" placeholder="password"
                  value={this.state.password} onChange={this.onPasswordChangeHandler} />
              </div>
              <div className="form-group">
                <button
                  onClick={this.onSubmit}
                  type="submit"
                  className="btn btn-primary btn-lg btn-block login-button"
                >
                  Register
              </button>
              </div>
            </form>
          </div>

          {this.state.successMessage && <div class="alert alert-success">
            {this.state.successMessage}
            <div className="list-group">
              <Link to="/login">Login page</Link>
            </div>
          </div>
          }

          {this.state.errorMessage &&
            <div class="alert alert-danger">{this.state.errorMessage}</div>}

        </div>
      </div >

    )
  }
}

export default Register;