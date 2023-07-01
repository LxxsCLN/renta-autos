import { Link } from "react-router-dom";

function HeroPages({ name }) {
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages-overlay"></div>
        <div className="container">
          <div className="hero-pages-text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Inicio</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
