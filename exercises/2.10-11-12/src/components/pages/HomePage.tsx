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
            <h4>My favorites movies </h4>
            <MovieTitleList movies={movies} />
        </div>
    );
};

export default HomePage;