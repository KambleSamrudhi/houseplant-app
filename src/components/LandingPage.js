import React from 'react';
import { Link } from 'react-router-dom';
import greenery from '../assets/greenery.jpg';

const LandingPage = () => (
  <div
    style={{
      backgroundImage: `url(${greenery})`,
      height: '100vh',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1>Welcome to Our Plant Store</h1>
    <p>Your one-stop shop for houseplants!</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
