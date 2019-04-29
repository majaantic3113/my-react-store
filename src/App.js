import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Purchase from "./pages/purchases/purchases";

import Layout from "./components/Layout/Layout";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Switch>
                  <Route path='/cart' component={Cart} />
                  <Route path='/checkout' component={Checkout} />
                  <Route path='/purchases' component={Purchase} />
                  <Route path='/products/:id' component={Product} />
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <Route path='/' component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;