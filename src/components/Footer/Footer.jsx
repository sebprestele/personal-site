import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright 2022 by Sebastian Prestele</p>
      <ul className="footer__icons">
        <li>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon icon={faXing}></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
