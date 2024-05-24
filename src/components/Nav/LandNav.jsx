import { NavLink } from "react-router-dom";
import logo from "../../assets/uniport logo.png";
import "./LandNav.css";

function LandNav() {
  return (
    <nav id="nav">
      <header className="header">
        <div className="container">
          <NavLink to="/" className="logo">
            <img src={logo} alt="Handshake" className="logo-img" />
          </NavLink>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink to="/" className="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/app" className="active">
                Library
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="active">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}

export default LandNav;
