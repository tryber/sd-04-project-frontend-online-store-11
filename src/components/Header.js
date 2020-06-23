import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">
          {' '}
          ShoppingCart{' '}
        </Link>
      </div>
    );
  }
}

export default Header;
