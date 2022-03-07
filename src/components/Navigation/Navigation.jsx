import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logoipsum-logo-51.svg";
import { Link } from "react-router-dom";

function Navigation({ toggleDark, isDark }) {
  return (
    <header className="header">
      <p className="header__title">
        <img src={logo} alt="" className={isDark ? "dark" : "logo"} />{" "}
      </p>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="about">About</Link>
          </li>
          <li className="nav__item">
            <a href="/">Projects</a>
          </li>
          <li className="nav__item">
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="toggle-light-dark">
          <FontAwesomeIcon
            icon={isDark ? faSun : faMoon}
            className="toggle--icon"
            onClick={toggleDark}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
