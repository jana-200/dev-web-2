import {Movie} from "../../types"
import "./mvoies.css";

interface MovieProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieProps) => {
  return (
    <table className="movies-list">
      <thead>
        <tr>
          <th>title</th>
          <th>director</th>
          <th>duration</th>
          <th>image</th>
          <th>description</th>
          <th>budget</th>
        </tr>
      </thead>
      <tbody>
      {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.duration}</td>
            <td>
              {movie.image_url ? (
                <img
                  src={movie.image_url}
                  alt={`${movie.title} poster`}
                  style={{ width: "100px", height: "auto" }}/>
              ) : (
                "-"
              )}
            </td>
            <td>{movie.description || "-"}</td>
            <td>{movie.budget ? `$${movie.budget.toLocaleString()}` : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
