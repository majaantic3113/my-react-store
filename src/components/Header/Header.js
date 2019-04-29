import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/userActions";

import Logo from "../UI/Logo/Logo";

class Header extends Component {

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.setIfUserIsLoggedIn(true);
        }
    }

    render() {
        const guest = <React.Fragment>
            <Link to="/login">
                Login
                </Link>
            <Link to="/register" style={{ 'marginLeft': '5px' }} >
                Register
                </Link>
        </React.Fragment>;

        const user = <Link to="/purchases" role="button">Purchases</Link>;

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <Logo />
                        </Link>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <Link to="/cart" className="shopping-cart" role="button">
                            Cart
                            <span style={{ 'marginLeft': '3px' }} className="badge">{this.props.cartProducts.length}</span>
                        </Link>
                        {this.props.loggedIn ? user : guest}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.user.loggedIn,
    username: state.user.username,
    cartProducts: state.cart.cartProducts,
});

const mapDispatchToProps = dispatch => {
    return {
        setIfUserIsLoggedIn: (loggedIn) => dispatch(actionCreators.setIsLoggedIn(loggedIn))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);