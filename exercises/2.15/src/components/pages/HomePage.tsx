import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieTitleList from "../MovieTitleList";

const HomePage = () => {
    const { movies }: MovieContext = useOutletContext();

    return (
        <div>
            <h3>Welcome to the Home Page</h3>
            <p>This is the homepage of our application.</p>
            <br />
            <h4>My favorite movies :</h4>
            <MovieTitleList movies={movies} />
        </div>
    );
};

export default HomePage;