import { Movie } from "../Movie";
export interface CinemaProps {
  name: string;
  movies: Movie[];
}

export const Cinema = ({ name, movies }: CinemaProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}</strong> - réalisateur : {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};