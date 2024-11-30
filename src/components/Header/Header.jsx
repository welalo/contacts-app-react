import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <nav className="Header">
        <span className='separator'><Link to="/">Login</Link></span>
        <span className='separator'><Link to="contacts">contacts</Link></span>
    </nav>
  );
}

export default Header;

