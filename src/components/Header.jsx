import { Link } from "react-router-dom";
import "../style/style.css";
import Book from "./Book";
import AddBook from "./AddBook";
import BrowseBooks from "./BrowseBooks";
function Header() {
  return (
    <div className="header">
    <ul>
      <Link to="/"><li>Home</li></Link>
    
      <Link to="/BrowseBooks">
      <li>BrowseBooks</li></Link>
      {/* <li>BrowseBooks</li> */}
      <Link to="/AddBook">
      <li>AddBooks</li></Link>
      
    </ul>
    </div>
  )
}
export default Header;