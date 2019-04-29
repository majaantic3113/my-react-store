import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "../../axios-store";

class Checkout extends Component {

    state = {
        notLoggedInMessage: null,
        successMessage: null
    }

    handleOrder = () => {
        if (!this.props.loggedIn) {
            this.setState({
                notLoggedInMessage: 'You have to login to make an order!'
            })
        } else {
            const { username, cart } = this.props;

            let requestBody = { username, purchase: cart };

            axios.post('/purchases', requestBody).then(response => {
                this.setState({ successMessage: 'Success! Purchase saved!' });
            }).catch(() => {
                this.setState({ errorMessage: 'Purchase failed!' });
            });
        }
    }
    render() {
        let totalPrice = 0;
        return (
            <div className="row is-flex">
                <h1>Your order</h1>
                <div style={{ 'marginTop': '40px' }} className="row is-flex">
                    {this.props.cart.map((item, index) => {
                        totalPrice += item.price * item.quantity;
                        return (
                            <div key={index}>
                                <strong>{item.name}</strong>
                                <span style={{ 'marginLeft': '40px' }}> ${item.price * item.quantity}</span>
                                <hr />
                            </div>
                        )
                    })}

                    <h3>Total price: ${totalPrice}</h3>
                    <button onClick={this.handleOrder} className="btn btn-success" type="submit" role="button">
                        Order
                    </button>

                    {this.state.successMessage &&
                        <div className="alert alert-success">
                            {this.state.successMessage}
                        </div>
                    }

                    {this.state.notLoggedInMessage &&
                        <div className="alert alert-danger">{this.state.notLoggedInMessage}</div>}

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedIn: state.user.loggedIn,
        username: state.user.username,
        cart: state.cart.cartProducts,
    };
};

export default connect(mapStateToProps)(Checkout);