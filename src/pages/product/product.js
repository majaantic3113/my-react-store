import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "../../axios-store";

import Spinner from "../../components/UI/Spinner/Spinner";

class Product extends Component {
    state = {
        product: null,
    };

    componentDidMount() {
        axios.get('product/?id=' + this.props.match.params.id).then(
            (result) => {
                this.setState({product: result.data[0]});
            }
        ).catch((error) => {
            console.log(error);
        });
    }

    render() {
        console.log(this.props);

        let product = <Spinner />;

        if (this.state.product) {
            product = <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="list-group">
                            <Link to="/store">Back To Home</Link>
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
                                    {this.state.product.name}
                        </h3>
                                <h4>$24.99</h4>
                                <p className="card-text">
                                    {this.state.product.description}
                            </p>
                                <Link
                                    className="btn btn-primary add-to-cart"
                                    role="button" to="/store/cart/addToCart"
                                >
                                    Add to Cart
                            </Link>
                                <Link
                                    className="btn btn-danger remove-from-cart"
                                    role="button" to="/store/cart/removeFromCart"
                                >
                                    Remove from Cart
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        return (
           product
        );
    }
}

export default Product