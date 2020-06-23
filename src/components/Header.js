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
      </div>
    );
  }
}

export default Header;
