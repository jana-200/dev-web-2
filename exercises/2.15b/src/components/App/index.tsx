import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from '../Navbar';
import { Movie, MovieContext , NewMovie} from "../../types";
import './App.css';
import { useEffect, useState } from "react";


const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
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
  },[]);



  const addMovie = async (newMovie: NewMovie): Promise<Movie> => {
    try {
      console.log("Adding new movie:", newMovie);
  
      const response = await fetch("/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      const addedMovie=await addMovie(newMovie);
      setMovies((prevMovies) => [...prevMovies, addedMovie]);
      navigate("/movie_list", { replace: true });
      }catch (error) {
      console.error(error);
    }
  };

  const deleteMovie = async (movie: Movie): Promise<void> => {
    try {
      console.log("Deleting movie:", movie);

      const response = await fetch(`/api/movies/${movie.id}`, {
        method: "DELETE",
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
      await deleteMovie(movie);
      await fetchMovies();
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  const movieContext: MovieContext = {
    movies,
    onMovieAdded,
    onMovieDeleted,
    
  };

  return (
    <>
      <Header text="Hello">
        <Navbar />
      </Header>

      <Outlet context={movieContext}/>
            
      <Footer></Footer>
    </>
  );
};


export default App;
