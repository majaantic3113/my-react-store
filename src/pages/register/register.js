import React, { Component } from 'react'
import renderField from "../../components/UI/renderField/renderField";
import { Field } from "redux-form";

class Register extends Component {
    render () {
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
            <Field
              name="name"
              type="text"
              component={renderField}
              label="Name"
              faClass="fa fa-user"
              placeholder="Enter your username..."
            />

            ...

            <Field
              name="confirmPassword"
              type="password"
              component={renderField}
              label="Confirm password"
              faClass="fa fa-unlock-alt"
              placeholder="Confirm password..."
            />

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block login-button"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

        )
    }
}

export default Register