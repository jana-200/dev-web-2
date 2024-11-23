import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from '../Navbar';
import { Movie, MovieContext , NewMovie} from "../../types";
import './App.css';
import { useState } from "react";


const App = () => {

  const defaultMovies : Movie[] = [
    {
      id: 1,
      title: "Jujustu Kaisen",
      director: "Sunghoo Park",
      duration: 111,
      image_url: "https://th.bing.com/th/id/OIP.UoT3wKa8uReaf0KBuoyTrAHaD5?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      title: "delico's nursery",
      director: "Yūya Ishii",
      duration: 111,
      image_url: "https://animenew.com.br/wp-content/uploads/2024/03/Delicos-Nursery-estreia-em-julho-Assista-ao-trailer-860x484.webp"
    },
    {
      id: 3,
      title: "one piece",
      director: "Tatsuya Nagamine",
      duration: 111,
      image_url: "https://simkl.in/fanart/11/11354962a7617ba7d1_w.jpg"
    },
    {
      id: 4,
      title: "Violet evergardern",
      director: "Taichi Ishidate",
      duration: 111,
      image_url: "https://th.bing.com/th/id/OIP.d8ofTo-d5voUwGr0DEKBxgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      id: 5,
      title: "gakuen babysitters",
      director: "Shūsei Morishita",
      duration: 111,
      image_url: "https://wallpapercave.com/wp/wp4779242.jpg"
    },
    {
      id: 6,
      title: "sugar apple fairy tale",
      director: "Yūya Ishii",
      duration: 111,
      image_url: "https://wallpapercave.com/wp/wp12073172.jpg"
    },
  ] ;


  const [movies, setMovies] = useState(defaultMovies);
  const navigate = useNavigate();


  const onMovieAdded = (newMovie: NewMovie) => {
    const nextId = Math.max(...movies.map((movie) => movie.id)) + 1;
    const movieToBeAdded = { id: nextId, ...newMovie };
    setMovies([...movies, movieToBeAdded]);
    navigate("/movie_list");
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
