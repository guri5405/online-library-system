import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css';
import "../style/style.css";
import books from '../utils/mockData';
import Browse from './BrowseBooks';

import BrowseBooks from "./BrowseBooks";



const HomePage = () => {
  // Dummy data for categories and popular books
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Biography'];
  const popularBooks = [
    { id: 1, title: 'Dune', author: 'Frank Herbert' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];

  return (
    <div className="home-page">
      <header className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/BrowseBooks">Browse-Books</Link>
        <Link to="/AddBook">Add-Book</Link>
      </header>
      <section className="welcome-section">
        <h1>Welcome to Our Book Library!</h1>
        <p>Explore a wide range of books across various categories.</p>
      </section>
     
      <section className="categories-section">
        <h2>Book Categories</h2>
        <ul className="categories-list">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/BrowseBooks/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="popular-books-section">
        <h2>Popular Books</h2>
        <ul className="popular-books-list">
          {popularBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
              <Link to={`/book/${book.id}`} className="view-details-link">View Details</Link>
            </li>
          ))}
        </ul>
      </section>
      
    </div>
  );
};

export default HomePage;
