import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from "react-redux";

import Logo from "../UI/Logo/Logo";
import actions from "../../store/actions/userActions";

class Header extends Component {

    render() {
        const guest = <Dropdown id="dropdown-custom-1">
                            <Dropdown.Toggle>
                                <Glyphicon glyph="star" />
                                Guest
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <LinkContainer to="/store/login">
                                    <MenuItem>Login</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/store/register">
                                    <MenuItem>Register</MenuItem>
                                </LinkContainer>
                            </Dropdown.Menu>
                      </Dropdown>;
        
        const user = <p>{this.props.username}</p>;

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/store" className="navbar-brand">
                            <Logo />
                        </Link>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <Link to="/store/cart" className="shopping-cart" role="button">
                            Cart{' '}
                            <span className="badge">{this.props.cartProducts.length}</span>
                        </Link>
                       {this.props.username ? user : guest}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.user.username,
    cartProducts: state.cart.cartProducts,
});

export default connect(mapStateToProps)(Header);