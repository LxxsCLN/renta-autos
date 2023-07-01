import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const bookBtn2 = () => {
    document
      .querySelector(".pick-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="herobackground" src={process.env.PUBLIC_URL + "/images/background.png"} alt="" />
          <div className="hero-content">
            <div className="hero-content-text">
              <h4>Planea tu viaje ahora</h4>
              <h1>
                Ahorra en <span>grande</span> con nuestros autos en renta
              </h1>
              <p>
                Renta el auto de tus sueños. Precios insuperables, kilómetros ilimitados, opciones de entrega flexibles, y mucho más.
              </p>
              <div className="hero-content-text-btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content-text-btns-book-ride"
                  to="/"
                >
                  Renta Ahora &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link onClick={bookBtn2} className="hero-content-text-btns-learn-more" to="/">
                  Aprende Más &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            <img
              src={process.env.PUBLIC_URL + "/images/carimg.png"}
              alt=""
              className="hero-content-car-img"
            />
          </div>
        </div>

        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
