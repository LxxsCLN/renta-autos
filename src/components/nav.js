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
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbarclose">
            <i className="fa-solid fa-xmark">CLOSE</i>
          </div>
          <ul className="mobile-navbarlinks">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <div className="navbarimg">
                <img className="navbarimgimg" src={process.env.PUBLIC_URL + "/images/logo.svg"}  alt="" />
                <p><span>Renta </span>Auto!</p> 
              </div>
            </Link>
          
          <ul className="navbarlinks">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbarbuttons">
            <Link className="navbarbuttonssign-in" to="/">
              Sign In
            </Link>
            <Link className="navbarbuttonsregister" to="/">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars">SHOW</i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
