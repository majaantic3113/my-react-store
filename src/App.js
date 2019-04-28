import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

import Layout from "./components/Layout/Layout";

import './App.css';

class App extends Component {

  render() {
    const main = <Switch>
      <Route path='/cart' component={Cart} />
      <Route path='/checkout' />
      <Route path='/products/:id' component={Product} />

      {/* dodato */}

      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/' component={Home} />



    </Switch>;

    // const login = <Switch>
    //   <Route path='/store/login' component={Login} />
    //   <Route path='/store/register' component={Register} />
    //   <Redirect to='/store/login' />
    // </Switch>;

    return (
      <div className="App">
        <Layout>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* {userLogged ? main : login} */}
                {main}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;