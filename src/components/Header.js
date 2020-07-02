import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import shop from './shop.png';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link
          className="shoppingCartLink"
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          <img src={shop} alt="shoppingCart" />
        </Link>
      </div>
    );
  }
}

export default Header;
