import path from "node:path";

import { Comment } from "../types";
import { parse, serialize } from "../utils/json";
import { readOneMovie } from "./movies";

const jsonDbPath = path.join(__dirname, "/../data/comments.json");

// Read all comments and filter then by filmId if provided
const readAll = (movieId: number | undefined = undefined): Comment[] => {
  const comments = parse<Comment>(jsonDbPath);

  return movieId
    ? comments.filter((comment) => comment.movieId === movieId)
    : comments;
};

// Create a new comment
const createOne = (comment: Comment): void => {
  const comments = parse<Comment>(jsonDbPath);

  // Check if the film exists in the films
  const filmFound = readOneMovie(comment.movieId);
  if (!filmFound) {
    throw new Error("Not found");
  }

  // Check that the username has not already commented on the film
  const userHasCommented = comments.some(
    (c) => c.movieId === comment.movieId && c.username === comment.username
  );

  if (userHasCommented) {
    throw new Error("Conflict");
  }

  comments.push(comment);

  serialize(jsonDbPath, comments);
};

// Delete a comment
const deleteOne = (movieId: number, username: string): Comment => {
  const comments = parse<Comment>(jsonDbPath);

  const index = comments.findIndex(
    (c) => c.movieId === movieId && c.username === username
  );

  if (index === -1) {
    throw new Error("Not found");
  }

  const deletedComments = comments.splice(index, 1);

  serialize(jsonDbPath, comments);

  return deletedComments[0];
};

export { readAll, createOne, deleteOne };