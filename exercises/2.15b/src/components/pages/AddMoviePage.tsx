import { useOutletContext } from 'react-router-dom';
import { MovieContext } from '../../types';
import AddMovieForm from '../AddMovieForm';

const AddMoviePage = () => {
    const { onMovieAdded }: MovieContext = useOutletContext();

    return (
        <div>
            <h3>Add a movie here :</h3>
            <AddMovieForm onMovieAdded={onMovieAdded} />
            <br /><br /><br />
        </div>
    );
};

export default AddMoviePage;