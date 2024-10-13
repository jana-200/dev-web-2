import { Router } from "express";
import { NewMovie} from "../types";
import { 
  readAllMovies,
  readOneMovie,
  createOneMovie,
  deleteOneMovie,
  updateOneMovie,
}from "../services/movies";

const router = Router();

router.get("/", (req, res) => {
  const minDuration = Number(req.query["minimum-duration"]);
  const movies=readAllMovies(minDuration);
  return res.json(movies);
});


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = readOneMovie(id);
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

  const newMovie= createOneMovie({title, director, duration , budget,description,imageUrl});

  return res.json(newMovie);
});


router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = deleteOneMovie(id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});


router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "string" || !body.duration.trim())) ||
    ("budget" in body && (typeof body.budget !== "string" || !body.budget.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))

  ) {
    return res.sendStatus(400);
  }

  const { title,director, description,duration, budget, imageUrl }: Partial<NewMovie> = body;
  const updatedMovie= updateOneMovie(id,{title,director, description,duration, budget, imageUrl});

  if (!updatedMovie) {
    return res.sendStatus(404);
  }

  return res.json(updatedMovie);
});

router.put("/:id", (req, res) => {
  const id =Number(req.params.id);
  const body : unknown = req.body;

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

  const {title,director,duration, budget, description, imageUrl} = body as NewMovie;
  let updatedMovie= updateOneMovie(id,{title,director, description,duration, budget, imageUrl});

  if (!updatedMovie) {

    updatedMovie=createOneMovie({title,director, description,duration, budget, imageUrl});

  }
  
  return res.json(updatedMovie);
});



export default router;
