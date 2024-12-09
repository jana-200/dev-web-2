import { Router } from "express";

import { readAll, createOne, deleteOne } from "../services/comments";

import { Comment } from "../types";
import { authorize } from "../utils/auths";

const router = Router();

const expectedKeys = ["comment", "movieId", "username"];

const containsOnlyExpectedKeys = (
  obj: object,
  expectedKeys: string[]
): boolean => {
  return Object.keys(obj).every((key) => expectedKeys.includes(key));
};


// Route to get all comments or filter by movieId
router.get('/', (req, res) => {
    const movieId =
    "movieId" in req.query ? Number(req.query["movieId"]) : undefined;

  if (movieId !== undefined && (isNaN(movieId) || movieId <= 0)) {
    return res.sendStatus(400);
  }

  const filteredComments = readAll(movieId);

  return res.send(filteredComments);
    
});

// Route to add a comment
router.post('/', authorize, (req, res) => {
    const body:unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("comment" in body) ||
        !("movieId" in body) ||
        typeof body.comment !== "string" ||
        typeof body.movieId !== "number" ||
        !Number.isInteger(body.movieId) ||
        body.movieId <= 0 ||
        !body.comment.trim() ||
        !("user" in req) ||
        typeof req.user !== "object" ||
        !req.user ||
        !("username" in req.user) ||
        typeof req.user.username !== "string"
      ) {
        return res.sendStatus(400);
      }
      if (!containsOnlyExpectedKeys(body, expectedKeys)) {
        return res.sendStatus(400);
      }
      const newComment: Comment = {
        movieId: body.movieId,
        username: req.user.username,
        comment: body.comment,
      };
    
      try {
        createOne(newComment);
        return res.send(newComment);
      } catch (error) {
        if (!(error instanceof Error)) {
          return res.sendStatus(500);
        }
    
        if (error.message === "Not found") {
          return res.sendStatus(404);
        }
    
        if (error.message === "Conflict") {
          return res.sendStatus(409);
        }
    
        return res.sendStatus(500);
      }
});

// Delete a comment
router.delete("/movies/:movieId", authorize, (req, res) => {
  const movieId = Number(req.params.movieId);

  if (
    isNaN(movieId) ||
    movieId <= 0 ||
    !("user" in req) ||
    typeof req.user !== "object" ||
    !req.user ||
    !("username" in req.user) ||
    typeof req.user.username !== "string"
  ) {
    return res.sendStatus(400);
  }

  const username = req.user.username;

  try {
    const deletedComment = deleteOne(movieId, username);
    return res.send(deletedComment);
  } catch (error) {
    if (!(error instanceof Error)) {
      return res.sendStatus(500);
    }

    if (error.message === "Not found") {
      return res.sendStatus(404);
    }

    return res.sendStatus(500);
  }
});


export default router;