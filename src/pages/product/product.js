import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "../../axios-store";

import Spinner from "../../components/UI/Spinner/Spinner";

const ACCESS_DENIED = 'ACCESS_DENIED';

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
            this.setState({product: ACCESS_DENIED});;
        });
    }

    render() {

        const { product } = this.state;

        if(product === ACCESS_DENIED) {
            this.props.history.push('/store/login');
            return(null);
        } else {
            
        let spinner = <Spinner />;

        if (product) {
            spinner = <div className="container-fluid">
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
                                    {product.name}
                                </h3>
                                <h4>$24.99</h4>
                                <p className="card-text">
                                    {product.description}
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
           spinner
        );
    }

    }
}

export default Product