import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import * as actionCreators from "../../store/actions/actions";
import { connect } from "react-redux";

import Spinner from "../../components/UI/Spinner/Spinner";

class Cart extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        const products = JSON.parse(localStorage.getItem('cartProducts')) || [];
        this.setState({ products });
    }

    removeFromCartHandler = (product) => {
        const { products } = this.state;

        products.splice(products.indexOf(product), 1);

        localStorage.setItem('cartProducts', JSON.stringify(products));
        this.setState({ products });
    }

    render() {
        let cart = <Spinner />;

        if (this.state.products) {
            let cartBody = this.props.cart.map(
                product => (
                    <tr key={product._id}>

                        <td>
                            {product.name}
                        </td>
                        <td>
                            {product.description}
                        </td>
                        <td>
                            {product.quantity}
                        </td>
                        <td>
                            {(+product.price * +product.quantity)}
                        </td>
                        <td>
                            <button className="btn btn-danger remove-from-cart" onClick={() => this.props.onRemoveProductFromCartCompletely(product)}>
                                Remove from Cart
                            </button>
                        </td>
                    </tr>
                )
            );

            cart = <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Number</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartBody}
                </tbody>
            </Table>

        }

        return (
            <div>
                <div className="row is-flex">
                    <h1>Cart</h1>
                    <div className="row is-flex">
                        {cart}
                        <Link className="btn btn-success" role="button" to="/checkout">
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cartProducts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveProductFromCartCompletely: (product) => dispatch(actionCreators.removeProductFromCartCompletely(product)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);