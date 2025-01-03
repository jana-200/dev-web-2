import path from "node:path";
import { Book } from "../types";
import { parse } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/books.json");

const defaultBooks: Book[] = [
  {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960,
      "cover": "cover.jpg"
  },
  {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "year": 1949,
      "cover": "cover.jpg"
  },
  {
      "id": 3,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925,
      "cover": "cover.jpg"
  }
];

function readAllBooks(): Book[] {
  const books = parse(jsonDbPath, defaultBooks);

  return books;
}

function readOneBook(id: number): Book | undefined {
  const books = parse(jsonDbPath, defaultBooks);
  const book = books.find((book) => book.id === id);
  if (!book) {
    return undefined;
  }
  return book;
}



export {
  readAllBooks,
  readOneBook,
};
