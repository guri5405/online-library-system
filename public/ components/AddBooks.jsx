import React, { useState } from 'react';
import "../style/style.css";

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/bookSlice'; // Redux action to add a book
// import './AddBook.css';
import "../style/style.css";

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!author) newErrors.author = 'Author is required';
    if (rating && (rating < 0 || rating > 5)) newErrors.rating = 'Rating must be between 0 and 5';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Dispatch the addBook action to add the new book to Redux state
      dispatch(addBook({ title, author, description, rating: parseFloat(rating) || 0 }));
      // Redirect to Browse Books page
      navigate('/BrowseBooks');
    }
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </label>
        </div>
        <div className="form-group">
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          {errors.author && <p className="error">{errors.author}</p>}
        </label>
        </div>
        
        <div className="form-group">
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
          />
          {errors.rating && <p className="error">{errors.rating}</p>}
        </label>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

