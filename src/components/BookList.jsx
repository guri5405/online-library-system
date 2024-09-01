import { Link } from "react-router-dom";
import books from "../utils/mockData";
import Book from "./Book";

function BookList(props) {
  return(
    <div className="book-list">
    {
      props.booksData.map((data) =>( 
      <Link to ={`/book/${data.id}`}>
        <Book bookDetails={data}/></Link>
      ))
    }
    </div>
  )

}
export default BookList;
