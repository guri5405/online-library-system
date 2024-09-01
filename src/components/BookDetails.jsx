import { Link, useParams } from "react-router-dom";
import books from "../utils/mockData";


function BookDetails() { 

  const params = useParams();
  const book = books.filter(book => book.id == params.id)
  return(
    <>
     <h1> {`Book Details For Book with id ${params.id}`} </h1>
     {book.map(book => {
      return(
      <>
      <h2>{book.title}</h2>
      <h2>{book.author}</h2>
      <h2>{book.description}</h2>
      <img src={book.coverImage} alt="" width="500px" height="500px" />
      <div>
      <Link to="/BrowseBooks" className="back-to-browse-link">Back to Browse</Link>
      </div>
      
      </>)
     })}
     
    </>
  );
}

export default BookDetails;