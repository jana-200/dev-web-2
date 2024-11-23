
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
    <nav className='navbar'>
        <Link to="/" className='button'>Home</Link>
        <Link to="/cinema" className='button'>Cinema</Link>
        <Link to="/movie_list" className='button'>Movies</Link>
        <Link to="/add_movie" className='button'>Add movie</Link>
    </nav>
);

export default Navbar;