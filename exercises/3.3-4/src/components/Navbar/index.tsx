
import { Link } from 'react-router-dom';
import './navbar.css';
import { MaybeAuthenticatedUser } from '../../types';

interface NavbarProps {
    authenticatedUser: MaybeAuthenticatedUser;
    clearUser: () => void;
}

const Navbar = ({authenticatedUser,clearUser}: NavbarProps) => {
    if(authenticatedUser){ 
        return ( 
            <nav className='navbar'>
                <Link to="/" className='button'>Home</Link>
                <Link to="/cinema" className='button'>Cinema</Link>
                <Link to="/movie_list" className='button'>Movies</Link>
                <Link to="/add_movie" className='button'>Add movie</Link>
                <Link to="/" className='button' onClick={() => clearUser()}>Logout</Link>
            </nav>

        );
        
    }

    else{ 
        return(
            <nav className='navbar'>
                <Link to="/" className='button'>Home</Link>
                <Link to="/cinema" className='button'>Cinema</Link>
                <Link to="/movie_list" className='button'>Movies</Link>
                <Link to="/register" className='button'>Register</Link>
                <Link to="/login" className='button'>Login</Link>
            </nav>
        );
    }
    
};

export default Navbar;