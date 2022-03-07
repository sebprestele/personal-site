import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>
          Sebastian Prestele
          <br></br>
          <span className="hero hero__content--highlight">
            Frontend Developer
          </span>
          <br></br>
        </h1>

        <Link to="#about" className="btn btn--primary">
          More about me
        </Link>
      </div>
    </section>
  );
}

export default Hero;
