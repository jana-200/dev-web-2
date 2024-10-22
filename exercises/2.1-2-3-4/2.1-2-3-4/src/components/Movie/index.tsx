export interface Movie {
  title: string;
  director: string;
}

export const Movie = ({ title, director }: Movie) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{director}</p>
    </div>
  );
};