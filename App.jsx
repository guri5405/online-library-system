/*
Booklist components
book component
*/
import BookList from "./components/BookList"
import books from "./utils/mockData";
import "./style/style.css";
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
// import { Outlet } from "react-router-dom";
// import Provider  from "react-redux";
// import appStore from "./utils/appStore";

function App() {
 
  return (
    <>
    {/* <Header/> */}
     <HomePage/>

   </>
 
  );
  
}

export default App;
