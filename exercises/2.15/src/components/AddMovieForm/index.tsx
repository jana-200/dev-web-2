import {  SyntheticEvent, useState } from "react";
import { NewMovie } from "../../types";
import "./form.css"

interface AddMovieFormProps {
    onMovieAdded: (movie: NewMovie) => void;
  }

const AddMovieForm = ({ onMovieAdded }: AddMovieFormProps) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);
    const [image_url, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);
  
    const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      onMovieAdded({title, director, duration, image_url, description, budget });

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
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              type="text"
              id="title"
              name="title"
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="field-group">
            <label htmlFor="director">Director</label>
            <input
              value={director}
              type="text"
              id="director"
              name="director"
              onChange={handleDirectorChange}
              required
            />
          </div>
          <div className="field-group">
            <label htmlFor="duration">Duration</label>
            <input
              value={duration}
              type="number"
              id="duration"
              name="duration"
              onChange={handleDurationChange}
              required
            />
          </div>
          <div className="field-group">
            <label htmlFor="image">Image URL</label>
            <input
              value={image_url}
              type="text"
              id="image"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <div className="field-group">
            <label htmlFor="description">Description</label>
            <input
              value={description}
              type="text"
              id="description"
              name="description"
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="field-group">
            <label htmlFor="budget">Budget</label>
            <input
              value={budget}
              type="number"
              id="budget"
              name="budget"
              onChange={handleBudgetChange}
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
};

export default AddMovieForm;