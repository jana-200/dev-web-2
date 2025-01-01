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

interface User {
    username: string;
    password: string;
}
interface AuthenticatedUser {
    username: string;
    token: string;
  }
  
type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

interface MovieContext{
    movies: Movie[];
    onMovieAdded: (newMovie: NewMovie) => void;
    onMovieDeleted: (movie: Movie) => void;
    registerUser: (user: User) => void;
    loginUser: (user: User) => Promise<void>;
}
export type { 
    Movie,
    MovieContext,
    NewMovie,
    User,
    AuthenticatedUser,
    MaybeAuthenticatedUser,
 };
  