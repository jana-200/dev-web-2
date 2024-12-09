import { Request } from "express";

interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget? : number,
  description?: string,
  image_url?:string,
}

interface MovieToUpdate {
  title?: string;
  description?: string;
}

type NewMovie = Omit<Movie, "id">;


interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

type PotentialUser = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

interface Comment {
  movieId: number;
  username: string;
  comment: string;
}

export type {
  Movie, 
  NewMovie,
  MovieToUpdate,
  AuthenticatedUser,
  User,
  PotentialUser,
  AuthenticatedRequest,
  JwtPayload,
  Comment,
};
