import Logo from '../img/logoHenry.png'
import './Nav.css';
import SearchBar from './SearchBar.jsx'
import {Link} from 'react-router-dom'

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Practica de Clima
        </span>
      </Link>
      <Link to='/about'>
        <span className='navbar-brand'>Informacion Adicional</span>
      </Link>
        <SearchBar onSearch={props.onSearch} />
    </nav>
  );
};

export default Nav;
