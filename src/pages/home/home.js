import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PageHeader, Pagination } from "react-bootstrap";
import axios from "../../axios-store";

import Spinner from '../../components/UI/Spinner/Spinner';

const GAMES_PER_PAGE = 2;

const ACCESS_DENIED = 'ACCESS_DENIED';

class Home extends Component {
    state = {
        products: null,
        categories: null,
        activePage: 1,
        items: 3,
        maxButtons: 10,
    };

    componentDidMount() {
        axios.get('/product').then((results) => {
            const items = Math.ceil(results.data.length / GAMES_PER_PAGE);
            this.setState({
                products: results.data,
                items: items
            });
        }).catch(
            (error) => {
                this.setState({ products: ACCESS_DENIED });
            }
        );

        axios.get('/category').then((result) => {
            this.setState({ categories: result.data });
        }).catch(
            (error) => {
                console.log(error);
            }
        );
    }

    onSelectPaginationHandler = (event) => {
        this.setState({ activePage: event });
    }

    render() {

        if (this.state.products === ACCESS_DENIED) {
            this.props.history.push('/store/login');
            return(null);
        } else {

            let productsTable = <Spinner />;

            if (this.state.products) {
                const products = this.state.products.slice((this.state.activePage - 1) * GAMES_PER_PAGE, this.state.activePage * GAMES_PER_PAGE);
                productsTable = products.map(
                    (product) => {
                        const link = "/store/product/" + product._id;
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
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    }
                );
            }


            let categories = <Spinner />;

            if (this.state.categories) {
                categories = this.state.categories.map(
                    (category) => (
                        <Link key={category._id} role="button" to="/store/products" params={{ id: category.id }}>
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

                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={this.state.items}
                            maxButtons={this.state.maxButtons}
                            activePage={this.state.activePage}
                            onSelect={this.onSelectPaginationHandler}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default Home;