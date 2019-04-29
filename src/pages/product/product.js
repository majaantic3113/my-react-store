import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios-store";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Product extends Component {
    state = {
        product: null,
        quantity: null,
    };

    componentDidMount() {
        axios.get('products/?id=' + this.props.match.params.id).then(
            (result) => {
                this.setState({ product: result.data[0] });
            }
        );
    }

    // not currently used
    addToCart = () => {
        const { product } = this.state;
        const products = JSON.parse(localStorage.getItem('cartProducts')) || [];

        const index = products.findIndex(p => p._id === product._id);

        if (index === -1) {
            products.push(product);
        } else {
            products[index].quantity++;
        }

        localStorage.setItem('cartProducts', JSON.stringify(products));
        this.props.history.push('/');
    }
    // not currently used
    removeFromCart = () => {
        const { product } = this.state;
        const products = JSON.parse(localStorage.getItem('cartProducts')) || [];

        const index = products.findIndex(p => p._id === product._id);

        if (index === -1) {
            return;
        } else {
            if (products[index].quantity === 1) {
                products.splice(index, 1);
            } else {
                products[index].quantity--;
            }
        }

        localStorage.setItem('cartProducts', JSON.stringify(products));

        this.props.history.push('/store');
    }

    addProductToCart = () => {
        return this.props.onAddProductToCart(this.state.product);
    }

    render() {
        const { product } = this.state;

        let productComponent = <Spinner />;

        const cartProduct = this.props.cart.find(p => p._id === this.props.match.params.id);
        let quantity = cartProduct ? cartProduct.quantity : 0;

        if (product) {
            productComponent = <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="list-group">
                            <Link to="/">Back To Home</Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="card mt-4">
                            <img
                                className="card-img-top img-fluid"
                                src="http://placehold.it/900x400"
                                alt=""
                            />
                            <div className="card-body">
                                <h3 className="card-title">
                                    {product.name}
                                </h3>
                                <h4>${product.price}</h4>
                                <p className="card-text">
                                    Description: {product.description}
                                </p>
                                <p className="card-title">
                                    Quantity: <strong>{quantity}</strong>
                                </p>
                                <button className="btn btn-primary add-to-cart" onClick={this.addProductToCart}>
                                    Add to Cart
                                </button>
                                <button className="btn btn-danger remove-from-cart" onClick={() => this.props.onRemoveProductFromCart(this.state.product)}>
                                    Remove from Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        return (
            productComponent
        );

    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cartProducts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddProductToCart: (product) => dispatch(actionCreators.addProductToCart(product)),
        onRemoveProductFromCart: (product) => dispatch(actionCreators.removeProductFromCart(product)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Product, axios));