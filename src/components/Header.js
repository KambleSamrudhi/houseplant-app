import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header>
      <h1>Greenery Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-icon">
          🛒 <span>{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;