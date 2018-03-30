import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home/home";
// import Checkout from "./pages/checkout/checkout";
import Product from "./pages/product/product";
// import Cart from "./pages/cart/cart";
// import Login from "./pages/login/login";
// import Register from "./pages/register/register";

import Layout from "./components/Layout/Layout";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Switch>
                    <Route path='/store/cart' />
                    <Route path='/store/checkout' />
                    <Route path='/store/login' />
                    <Route path='/store/register' />
                    <Route path='/store/product/:id' component={Product}/>
                    <Route path='/store/' component={Home} />
                  </Switch>
                </div>
              </div>
            </div>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
