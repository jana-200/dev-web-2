import { Router } from "express";
import { Movie, NewMovie} from "../types";

const movies: Movie[] = [
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

const router = Router();

router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    return res.json(movies);
  }
  const minDuration = Number(req.query["minimum-duration"]);
  const filteredMovies = movies.filter((movie) => {
    return movie.duration >= minDuration;
  });
  return res.json(filteredMovies);
});


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) {
    return res.sendStatus(404);
  }
  return res.json(movie);
});

router.post("/",(req, res) => { 
  const body: unknown = req.body;
  if(
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0
    ){
      return res.sendStatus(400);
    }

  // Vérification des champs optionnels
  if ("budget" in body && (typeof body.budget !== "number" || body.budget<=0) ) {
      return res.sendStatus(400);
  }

  if ("description" in body && (typeof body.description !== "string" || !body.description.trim())) {
      return res.sendStatus(400);
  }

  if ("imageUrl" in body && body.imageUrl !== null && typeof body.imageUrl !== "string" ) {
      return res.sendStatus(400);
  }

  const { title, director, duration , budget,description,imageUrl } = body as NewMovie;
  
  const exist = movies.find((movie) => movie.title === title && movie.director === director);
  if (exist) {
    return res.status(409).json();
  }
  const nextId = movies.reduce((maxId, movie) => (movie.id > maxId ? movie.id : maxId), 0) +1;

  const newMovie: Movie = {
    id: nextId,
    title,
    director,
    duration,
    budget , 
    description, 
    imageUrl,    
  };
  
  movies.push(newMovie);

  return res.json(newMovie);
});

export default router;
