import { useOutletContext } from 'react-router-dom';
import { MovieContext } from '../../types';
import Movies from '../Movie';

const MovieListPage= () => {
  const { movies }: MovieContext = useOutletContext();

    return (
        <div>
          <br /><br /><br />
          <h3>Suggestions : </h3>
            <Movies movies={movies} />
            <br /><br />
        </div>
    );
};

export default MovieListPage;