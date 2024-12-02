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
      console.error("getAllMovies::error: ", err);
      throw err;
    }
  }

  const fetchMovies = async () =>{
    try {
      const movies = await getAllMovies();
      setMovies(movies);
    } catch (err) {
      console.error("HomePage::error: ", err);
    }
  }
  useEffect(()=>{ 
    fetchMovies();
  },[]);



  const addMovie = async (newMovie: NewMovie): Promise<Movie> => {
    try {
      const response = await fetch("/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMovie),
      });

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const addedMovie = await response.json();

      return addedMovie;
    } catch (err) {
      console.error("addMovie::error: ", err);
      throw err;
    }
  }


  const oneMovieAdded = async (newMovie: NewMovie) => {
    try{ 
      const addedMovie = await addMovie(newMovie);
      console.log("Movie added:", addedMovie);
      await fetchMovies();
      navigate("/movie-list");
      }catch (error) {
      console.error( error);
    }
  };

  const movieContext: MovieContext = {
    movies,
    oneMovieAdded,
    
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
