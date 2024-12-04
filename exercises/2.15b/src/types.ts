interface Movie {
    id:number;
    title: string;
    director: string;
    duration: number;
    image_url? : string;
    description? : string;
    budget? : number;
}

type NewMovie = Omit<Movie, "id">;

interface MovieContext{
    movies: Movie[];
    onMovieAdded: (newMovie: NewMovie) => void;
    onMovieDeleted: (movie: Movie) => void;
}
export type { Movie, MovieContext,NewMovie };
  