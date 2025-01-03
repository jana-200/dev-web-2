import { Book } from "../types";
import "./BookCard.css";
import defaultCover from "../assets/cover.jpg";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="book-card">
      <h1 className="book-title">{book.title}</h1>
      <h2 className="book-author"> {book.author}</h2>
      <p className="book-year">{book.year}</p>
      <img src={defaultCover} alt={book.title} className="book-cover" />
    </div>
  );
};

export default BookCard;
