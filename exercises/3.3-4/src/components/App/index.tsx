import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from '../Navbar';
import { AuthenticatedUser, MaybeAuthenticatedUser, Movie, MovieContext , NewMovie, User} from "../../types";
import './App.css';
import { useEffect, useState } from "react";
import { clearAuthenticatedUser, getAuthenticatedUser, storeAuthenticatedUser } from "../../utils/session";


const App = () => {

  const currentTheme = localStorage.getItem("theme") ?? "dark";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">(
    currentTheme as "light" | "dark"
  );

  const [authenticatedUser, setAuthenticatedUser] =
    useState<MaybeAuthenticatedUser>(undefined);

  const navigate = useNavigate();

  async function getAllMovies() {
    try {
      const response = await fetch("/api/movies");

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const movies = await response.json();

      return movies;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const fetchMovies = async () =>{
    try {
      const movies = await getAllMovies();
      setMovies(movies);
    } catch (err) {
      console.error( err);
    }
  }
  useEffect(()=>{ 
    fetchMovies();
    const authenticatedUser = getAuthenticatedUser();
    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
    }
  },[]);



  const addMovie = async (newMovie: NewMovie, authenticatedUser: AuthenticatedUser): Promise<Movie> => {
    try {
      console.log("Adding new movie:", newMovie);
  
      const response = await fetch("/api/movies", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: authenticatedUser.token, 
        },
        body: JSON.stringify(newMovie),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorMessage}`);
      }
  
      const addedMovie = await response.json();
      console.log("Successfully added movie:", addedMovie);

      return addedMovie;
    } catch (err) {
      console.error("Error in addMovie:", err);
      throw err;
    }
  };


  const onMovieAdded = async (newMovie: NewMovie) => {
    try{ 
      const addedMovie=await addMovie(newMovie, authenticatedUser!);
      setMovies((prevMovies) => [...prevMovies, addedMovie]);
      navigate("/movie_list", { replace: true });
      }catch (error) {
      console.error(error);
    }
  };

  const deleteMovie = async (movie: Movie,authenticatedUser:AuthenticatedUser): Promise<void> => {
    try {
      console.log("Deleting movie:", movie);

      const response = await fetch(`/api/movies/${movie.id}`, {
        method: "DELETE",
        headers: {
          Authorization: authenticatedUser.token,
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorMessage}`);
      }

      console.log("Successfully deleted movie:", movie);
    } catch (err) {
      console.error("Error in deleteMovie:", err);
    }
  }

  const onMovieDeleted = async (movie:Movie) => { 
    try {
      await deleteMovie(movie, authenticatedUser!);
      await fetchMovies();
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const registerUser = async (newUser: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/register", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const createdUser: AuthenticatedUser = await response.json();

      setAuthenticatedUser(createdUser);
      storeAuthenticatedUser(createdUser);

      console.log("createdUser: ", createdUser);
    } catch (err) {
      console.error("registerUser::error: ", err);
      throw err;
    }
  }

  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);

    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

  const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  }

  const movieContext: MovieContext = {
    movies,
    onMovieAdded,
    onMovieDeleted,
    registerUser,
    loginUser,
    
  };

  return (
    <>
      <Header text="Hello">
        <Navbar authenticatedUser={authenticatedUser} clearUser={clearUser} />
      </Header>

      <Outlet context={movieContext}/>
            
      <Footer theme={theme} handleThemeChange={handleThemeChange}></Footer>
    </>
  );
};


export default App;
