import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        <div className={`mobile-navbar  ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbarclose ">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbarlinks">
            <li>
              <Link onClick={openNav} to="/">
                Inicio
              </Link>
            </li>            
            <li>
              <Link onClick={openNav} to="/autos">
                Autos
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonios
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contacto
              </Link>
            </li>
            <li></li><li></li>
          </ul>
        </div>

        <div className="navbar">
          
            <Link className="navbarimg" to="/" onClick={() => window.scrollTo(0, 0)}>
                <img className="navbarimgimg" src={process.env.PUBLIC_URL + "/images/logo.png"}  alt="" />
            </Link>
          
          <ul className="navbarlinks">
            <li>
              <Link className="home-link" to="/">
                Inicio
              </Link>
            </li>            
            <li>
              {" "}
              <Link className="models-link" to="/autos">
                Autos
              </Link>
            </li>            
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Testimonios
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
          <div className="navbarbuttons">
            <Link className="navbarbuttonssign-in" to="/">
              Iniciar sesión
            </Link>
            <Link className="navbarbuttonsregister" to="/">
              Registrarse
            </Link>
          </div>

          <div className="mobile-menu " onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
