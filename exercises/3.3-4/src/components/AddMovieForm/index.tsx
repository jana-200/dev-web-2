import {  SyntheticEvent, useState } from "react";
import { NewMovie } from "../../types";
import "./form.css"

interface AddMovieFormProps {
    onMovieAdded: (movie: NewMovie) => void;
  }

const AddMovieForm = ({ onMovieAdded }: AddMovieFormProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [image_url, setImageUrl] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [budget, setBudget] = useState<number | undefined>(undefined);
  
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onMovieAdded({
      title,
      director,
      duration: duration ?? 0,
      image_url,
      description,
      budget,
    });
  };
  
    return (
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label>Title</label>
            <input
              value={title}
              type="text"
              onChange={(e)=> setTitle(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>Director</label>
            <input
              value={director}
              type="text"
              onChange={(e)=> setDirector(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label>Duration</label>
            <input
              value={duration ?? ""}
              type="number"
              onChange={(e)=> setDuration(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="field-group">
            <label>Image URL</label>
            <input
              value={image_url}
              type="text"
              onChange={(e)=> setImageUrl(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Description</label>
            <input
              value={description}
              type="text"
              onChange={(e)=> setDescription(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>Budget</label>
            <input
              value={budget ?? ""}
              type="number"
              onChange={(e)=> setBudget(parseInt(e.target.value))}
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
};

export default AddMovieForm;