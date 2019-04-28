import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PageHeader } from "react-bootstrap";
import axios from "../../axios-store";
import { withRouter } from "react-router";

import Spinner from '../../components/UI/Spinner/Spinner';

class Home extends Component {
    state = {
        products: null,
        categories: null,
        username: null,
        filter: ''
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);

        // Store filter in state so we can compare when props change.
        // Clear out any previously-loaded user data (so we don't render stale stuff).
        if (nextProps.location.search !== prevState.filter) {
            return {
                filter: nextProps.location.search,
                products: null,
            };
        }

        // No state update necessary
        return null;
    }

    componentDidMount() {
        axios.get('/products', {
            params: {
                category: this.props.location.search.split('=')[1]
            }
        }).then((results) => {
            this.setState({
                products: results.data,
                loading: false
            });
        });

        axios.get('/categories').then((result) => {
            this.setState({ categories: result.data });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.products === null) {
            axios.get('/products', {
                params: {
                    category: this.props.location.search.split('=')[1]
                }
            }).then((results) => {
                this.setState({
                    products: results.data,
                    loading: false
                });
            }).catch((err) => {
                console.log(err)
            });
        }
    }

    render() {
        let productsTable = <Spinner />;

        if (this.state.products === null) {
            productsTable = <Spinner />;

        } else {
            const products = this.state.products;
            productsTable = products.map(
                (product) => {
                    const link = "/products/" + product._id;
                    return (
                        <li key={product._id} className="col-sm-6 col-md-4 product-wrapper">
                            <div className="thumbnail">
                                <img src="http://via.placeholder.com/350x300" alt="" />
                                <div className="caption">
                                    <h3>
                                        {product.name}
                                    </h3>
                                    <p>
                                        {product.description}
                                    </p>
                                    <p>
                                        <Link
                                            className="btn btn-primary"
                                            role="button"
                                            to={link}
                                            params={{ id: product._id }}
                                        >
                                            More Details
                                        </Link>
                                        {/* <button style={{ "marginLeft": "5px" }} className="btn btn-success add-to-cart" onClick={this.addProductToCart}>
                                            Add to Cart
                                    </button> */}
                                    </p>

                                </div>
                            </div>
                        </li>
                    );
                }
            );
        }
        let categories = null;

        if (this.state.loading) {
            productsTable = <Spinner />;
        }

        if (this.state.categories) {
            categories = this.state.categories.map(
                (category) => (
                    <Link style={{ "marginLeft": "5px" }} key={category._id} className="btn btn-primary"
                        role="button" to={`/products?category=${category.name}`} params={{ id: category.name }}>
                        {category.name}
                    </Link>
                )
            );
        }

        return (
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-right">
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                {categories}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="row is-flex">
                    <PageHeader>
                        Title
                    </PageHeader>

                    <div className="row is-flex">
                        <ul className="col-sm-12 col-md-12 list-unstyled">
                            {productsTable}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home, axios);