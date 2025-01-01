import { Movie } from "../../types";
import "./MovieCard.css";

interface  MovieCardProps {
    movie: Movie;
    onMovieDeleted: (movie: Movie) => void;
}

const MovieList = ( {movie, onMovieDeleted} : MovieCardProps ) => {

  return (
    <div className="movie-list">
        <div className="movie-card" key={movie.title}>
          <h3>{movie.title}</h3>
          <div className="movie-poster">
            {movie.image_url ? (
              <img
                src={movie.image_url}
                alt={`${movie.title} poster`}
                style={{ width: "100px", height: "auto" }}
              />
            ) : (
              "-"
            )}
          </div>
          <div className="movie-details">

            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Duration:</strong> {movie.duration}</p>
            {movie.description && (
              <p><strong>Description:</strong> {movie.description}</p>
            )}
            {movie.budget && (
              <p><strong>Budget:</strong> {`$${movie.budget.toLocaleString()}`}</p>
            )}
            
            <button onClick={()=>onMovieDeleted(movie)} className="delete-button" type="submit"> Supprimer </button>
          </div>
          
        </div>
    </div>
  );
};

export default MovieList;
