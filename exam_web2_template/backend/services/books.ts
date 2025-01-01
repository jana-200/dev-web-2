import path from "node:path";
import { Book } from "../types";
import { parse } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/books.json");

const defaultBooks: Book[] = [
  
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
