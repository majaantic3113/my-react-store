import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Logo from "../UI/Logo/Logo";

const header = (props) => {
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
                        <span className="badge">3</span>
                    </Link>
                    <Dropdown id="dropdown-custom-1">
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
                    </Dropdown>
                </div>
            </div>
        </nav>
    )
}

export default header;