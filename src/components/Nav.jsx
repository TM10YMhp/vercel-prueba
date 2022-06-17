import Logo from '../img/logoHenry.png'
import './Nav.css';


function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
    </nav>
  );
};

export default Nav;
