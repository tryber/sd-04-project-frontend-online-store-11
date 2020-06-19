import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ShoppingCart from './ShoppingCart';

class CartButton extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
              <FaShoppingCart size={42} />
          </Link>
        </div>
        <Switch>
          <Route path="/shopping-cart" component={ShoppingCart} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default CartButton;
