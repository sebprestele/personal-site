import "./Projects.css";

function Projects() {
  return (
    <section className="service-wrapper">
      <h2>My projects</h2>
      <div className="services">
        <div className="services__item">
          <h3 className="services__item__title">Project 1</h3>
          <p className="services__item__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            maxime porro explicabo ratione exercitationem! Iure nesciunt natus
            ipsa eligendi quia, error quis alias magnam temporibus consequuntur
            magni quibusdam in autem!
          </p>
          <a
            className="btn btn--secondary"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click me
          </a>
        </div>
        <div className="services__item">
          <h3 className="services__item__title">Project 2</h3>
          <p className="services__item__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            maxime porro explicabo ratione exercitationem! Iure nesciunt natus
            ipsa eligendi quia, error quis alias magnam temporibus consequuntur
            magni quibusdam in autem!
          </p>
          <a
            className="btn btn--secondary"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click me
          </a>
        </div>
        <div className="services__item">
          <h3 className="services__item__title">Project 3</h3>
          <p className="services__item__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            maxime porro explicabo ratione exercitationem! Iure nesciunt natus
            ipsa eligendi quia, error quis alias magnam temporibus consequuntur
            magni quibusdam in autem!
          </p>
          <a
            className="btn btn--secondary"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
