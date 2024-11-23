import { Link } from "react-router-dom";
import { Movie } from "../../types";
import "./movietitlelist.css";

interface MovieTitleListProps {
  movies: Movie[];
}

const MovieTitleList = ({ movies }: MovieTitleListProps) => {
  return (
    <div className="movie-title-list">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieTitleList;
