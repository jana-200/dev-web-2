
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className='navbar'>
        <Link to="/" className='button'>Home</Link>
        <Link to="/books" className='button'>Library</Link>
    </nav>
);

export default Navbar;