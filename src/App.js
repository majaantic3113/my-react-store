import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/Home/Home";
// import Checkout from "./pages/Checkout/Checkout";
import Product from "./pages/Product/Product";
// import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

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
                    <Route path='/store/cart' />
                    <Route path='/store/checkout' />
                    <Route path='/store/login' component={Login} />
                    <Route path='/store/register' component={Register}/>
                    <Route path='/store/product/:id' component={Product}/>
                    <Route path='/store/' component={Home} />
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
