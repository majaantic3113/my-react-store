import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from "./pages/Home/Home";
// import Checkout from "./pages/Checkout/Checkout";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Layout from "./components/Layout/Layout";

import './App.css';

const ACCESS_DENIED = 'ACCESS_DENIED';

class App extends Component {

  state = {
    userLogged: false,
  };

  render() {
    let userLogged = false;

    if(localStorage.getItem('token')) {
      userLogged = true;
    }

    const main = <Switch>
      <Route path='/store/cart' component={Cart} />
      <Route path='/store/checkout' />
      <Route path='/store/product/:id' component={Product} />
      <Route path='/store/' component={Home} />
    </Switch>;

    const login = <Switch>
      <Route path='/store/login' component={Login} />
      <Route path='/store/register' component={Register} />      
      <Redirect to='/store/login'/>
    </Switch>;

    return (
      <div className="App">
        <Layout>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {userLogged ? main : login}
              </div>
            </div>
          </div>
        </Layout>
          </div>
          );
        }
      }
      
      export default App;
