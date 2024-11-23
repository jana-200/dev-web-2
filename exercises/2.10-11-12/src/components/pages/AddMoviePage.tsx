import { useState } from 'react';
import AddMovieForm from '../AddMovieForm';
import { Movie } from '../../types';

const AddMoviePage = () => {

    const [movies, setMovies] = useState([] as Movie[]);
    const onMovieAdded = (newMovie: Movie) => {
        console.log("Movie to add:", newMovie);
        setMovies([...movies, newMovie]);
    };

    return (
        <div>
            <h3>Add a movie here :</h3>
            <AddMovieForm onMovieAdded={onMovieAdded} />
            <br /><br /><br />
        </div>
    );
};

export default AddMoviePage;