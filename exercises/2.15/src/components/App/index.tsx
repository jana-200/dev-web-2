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


  const onMovieAdded = async (newMovie: NewMovie) => {
    const nextId = Math.max(...movies.map((movie) => movie.id)) + 1;
    const movieToBeAdded = { id: nextId, ...newMovie };

    try{ 
      const options = {
        method: "POST",
        body: JSON.stringify(movieToBeAdded),
        headers: {
          "Content-Type": "application/json",
        },
    }

    const response = await fetch('/api/movies', options);
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const addedMovie = await response.json();
    setMovies([...movies, addedMovie]);
    navigate("/movie_list");
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const movieContext: MovieContext = {
    movies,
    onMovieAdded,
  
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
