import path from "node:path";
import { Movie, NewMovie } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/movies.json");

const defaultMovies: Movie[] = [
    {
     id: 1,
     title: "hey",
     director: "me",
     duration: 230,
     description:"wtffffffffffffff"
    },
    {
      id: 2,
      title: "yo",
      director: "me",
      duration: 220,
      imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
     },
     {
      id: 3,
      title: "hello",
      director: "me",
      duration: 210,
      budget:2555555555,
     }
  ];

  function readAllMovies(minDuration: number): Movie[] {
    const movies = parse(jsonDbPath, defaultMovies);
    if (!minDuration) {
      return movies;
    }
  
    const minDurationNb = Number(minDuration);

    const filteredMovies = movies.filter((movie) => {return movie.duration >= minDurationNb; });
    return filteredMovies;
  }

  function readOneMovie(id: number): Movie | undefined {
    const movies = parse(jsonDbPath, defaultMovies);
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) {
      return undefined;
    }
    return movie;
  }
  
  function createOneMovie(newMovie: NewMovie): Movie {
    const movies = parse(jsonDbPath, defaultMovies);
  
    const nextId =
      movies.reduce((maxId, movie) => (movie.id > maxId ? movie.id : maxId), 0) +1;
  
    const createdMovie = {
      id: nextId,
      ...newMovie,
    };
  
    movies.push(createdMovie);
    serialize(jsonDbPath, movies);
  
    return createdMovie;
  }

  function deleteOneMovie(movieId: number): Movie | undefined {
    const movies = parse(jsonDbPath, defaultMovies);
    const index = movies.findIndex((movie) => movie.id === movieId);
    if (index === -1) {
      return undefined;
    }
  
    const deletedElements = movies.splice(index, 1);
    serialize(jsonDbPath, movies);
    return deletedElements[0];
  }

  function updateOneMovie(movieId: number,newMovie: Partial<NewMovie>): Movie | undefined {
    const movies = parse(jsonDbPath, defaultMovies);
    const movie = movies.find((movie) => movie.id === movieId);
    if (!movie) {
        return undefined;
    }

    if (newMovie.title !== undefined) {
        movie.title = newMovie.title!; // the router already checks for the presence of title
    }
    if (newMovie.director !== undefined) {
      movie.director = newMovie.director!;
    }
    if (newMovie.duration !== undefined) {
      movie.duration = newMovie.duration!;
    }
    if (newMovie.budget !== undefined) {
      movie.budget = newMovie.budget!;
    }
    if (newMovie.description !== undefined) {
        movie.description = newMovie.description!;
    }
    if (newMovie.imageUrl !== undefined) {
        movie.imageUrl = newMovie.imageUrl!;
    }
  
    serialize(jsonDbPath, movies);
    return movie;
  }

  export {
    readAllMovies,
    readOneMovie,
    createOneMovie,
    deleteOneMovie,
    updateOneMovie,
  };