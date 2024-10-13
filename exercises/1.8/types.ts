interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget? : number,
  description?: string,
  imageUrl?:string,
}

interface MovieToUpdate {
  title?: string;
  description?: string;
}

type NewMovie = Omit<Movie, "id">;

export type { Movie, NewMovie, MovieToUpdate };
