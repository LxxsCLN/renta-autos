import { Link } from "react-router-dom";

function HeroPages({ name }) {
  return (
    <>
      <section className="heropages">
        <div className="heropages-overlay"></div>
        <div className="container">
          <div className="heropages-text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
