import { Book } from "./../types";
import "./Library.css";
import { Link } from "react-router-dom";

interface LibraryProps {
  books: Book[];
}

const Library = ({ books }: LibraryProps) => {
  return (
    <div> 

        <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3 className="book-title">{book.title}</h3>
            <Link to={`/books/${book.id}`} className="details-button">
              Voir plus de détails
            </Link>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Library;
