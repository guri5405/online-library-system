import React from 'react';
import { Link } from 'react-router-dom';
// import './PageNotFound.css';
import "../style/style.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
