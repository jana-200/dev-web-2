import path from "node:path";
import { Movie, NewMovie } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/movies.json");

const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "Jujustu Kaisen",
    director: "Sunghoo Park",
    duration: 111,
    image_url: "https://th.bing.com/th/id/OIP.UoT3wKa8uReaf0KBuoyTrAHaD5?rs=1&pid=ImgDetMain"
  },
  {
    id: 2,
    title: "delico's nursery",
    director: "Yūya Ishii",
    duration: 111,
    image_url: "https://animenew.com.br/wp-content/uploads/2024/03/Delicos-Nursery-estreia-em-julho-Assista-ao-trailer-860x484.webp"
  },
  {
    id: 3,
    title: "one piece",
    director: "Tatsuya Nagamine",
    duration: 111,
    image_url: "https://simkl.in/fanart/11/11354962a7617ba7d1_w.jpg"
  },
  {
    id: 4,
    title: "Violet evergardern",
    director: "Taichi Ishidate",
    duration: 111,
    image_url: "https://th.bing.com/th/id/OIP.d8ofTo-d5voUwGr0DEKBxgHaEK?rs=1&pid=ImgDetMain"
  },
  {
    id: 5,
    title: "gakuen babysitters",
    director: "Shūsei Morishita",
    duration: 111,
    image_url: "https://wallpapercave.com/wp/wp4779242.jpg"
  },
  {
    id: 6,
    title: "sugar apple fairy tale",
    director: "Yūya Ishii",
    duration: 111,
    image_url: "https://wallpapercave.com/wp/wp12073172.jpg"
  },
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
    if (newMovie.image_url !== undefined) {
        movie.image_url = newMovie.image_url!;
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