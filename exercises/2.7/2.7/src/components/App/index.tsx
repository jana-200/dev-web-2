import {  SyntheticEvent, useState } from "react";
import "./Main.css";
import Movies from "./movies";
import { Movie } from "../../types";


const defaultMovies = [
  {
    id: 1,
    title: "?",
    director: "?",
    duration: 1
  },
  {
    id: 2,
    title: "??",
    director: "??",
    duration: 1
  },
  {
    id: 3,
    title: "???",
    director: "???",
    duration: 1
  },
  {
    id: 4,
    title: "????",
    director: "????",
    duration: 1
  },
  {
    id: 5,
    title: "?????",
    director: "?????",
    duration: 1
  },
] ;

const Main = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [image_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [movies, setMovies] = useState(defaultMovies);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newMovie = {
      id: nextMovieId(movies),
      title: title,
      director: director,
      duration: duration,
      image_url: image_url,
      description: description, 
      budget: budget,
    };
    
    setMovies([...movies, newMovie]);
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    setDuration(parseInt(durationInput.value));
  };
  const handleImageChange = (e: SyntheticEvent) => {
    const imageInput = e.target as HTMLInputElement;
    setImageUrl(imageInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    setDescription(descriptionInput.value);
  };
  
  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    setBudget(parseInt(budgetInput.value));
  };

  return (
    <main>
      <p>My HomePage</p>
      
      <Movies movies={movies} />

      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">title</label>
          <input
            value={title}
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="director">director</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirectorChange}
            required
          />
          <label htmlFor="duration">duration</label>
          <input
            value={duration}
            type="number"
            id="duration"
            name="duration"
            onChange={handleDurationChange}
            required
          />
          <label htmlFor="image">Image URL</label>
          <input
            value={image_url}
            type="text"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
          <label htmlFor="description">Description</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
          />
          <label htmlFor="budget">Budget</label>
          <input
            value={budget}
            type="number"
            id="budget"
            name="budget"
            onChange={handleBudgetChange}
          />
          
          <button type="submit">Ajouter</button>
        </form>
      </div>

    </main>
  );
};

const nextMovieId = (movies: Movie[]) => {
  return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
};

export default Main;
