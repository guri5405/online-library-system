import React, { useState } from 'react';
import books from '../utils/mockData';
// import { useSelector } from 'react-redux';
// import './Browse.css';
import "../style/style.css";
// import books from '../utils/mockData';

import BookList from "./BookList";
import { Link, useParams } from 'react-router-dom';
const Browse = () => {
  
  const [serachText , setSearchText] = useState("");
  const [filteredBooks , setfilteredBooks] = useState(books);

  function handleSearch(){
   const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(serachText.toLowerCase()));
  
   setfilteredBooks(filteredBooks);
  }

  return (
    <>
      <div className="search">
      <h2>Search books</h2>
      <div>
      <input type="text" name=""  id="" className="search-input" onChange={(e) => setSearchText(e.target.value)}/>
      <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>

    <BookList booksData={filteredBooks}/>
    </>
  );
};

export default Browse;
