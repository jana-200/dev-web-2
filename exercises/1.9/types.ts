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

interface Text {
  id: string;
  content: string;
  level: 'easy' | 'medium' | 'hard';
}

type NewText = Omit<Text, "id">;

export type { Movie, NewMovie, MovieToUpdate, Text, NewText };
