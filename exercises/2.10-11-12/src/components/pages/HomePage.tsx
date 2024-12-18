import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieTitleList from "../MovieTitleList";

const HomePage = () => {
    const { movies }: MovieContext = useOutletContext();

    return (
        <div>
            <h4>Welcome to the Home Page</h4>
            <p>This is the homepage of our application.</p>
            <br />
            <h5>My favorite movies :</h5>
            <MovieTitleList movies={movies} />
        </div>
    );
};

export default HomePage;