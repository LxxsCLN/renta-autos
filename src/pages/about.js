import Footer from "../components/footer";
import HeroPages from "../components/heropages";
import { useState, useEffect } from "react";

function About() {

  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
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
      <section className="about-page">
        <HeroPages name="Sobre Nosotros" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main-img"
              src={process.env.PUBLIC_URL + "/images/aboutus.jpg"}
              alt=""
            />
            <div className="about-main-text">
              <h3>Sobre Nosotros</h3>
              <h2>Nuestro objetivo es brindarte el mejor servicio</h2>
              <p>
                Siempre nos hemos caracterizado por ser una empresa comprometida con sus clientes, nuestra forma de operar se basa en un conjunto 
                de políticas y requisitos claros y transparentes.
              </p>
              <div className="about-main-text-icons">
                <div className="about-main-text-icons-box">
                  <img src={process.env.PUBLIC_URL + "/images/box1.png"} alt="" />
                  <span>
                    <h4>24</h4>
                    <p>Modelos de autos</p>
                  </span>
                </div>
                <div className="about-main-text-icons-box">
                  <img src={process.env.PUBLIC_URL + "/images/box2.png"} alt="" />
                  <span>
                    <h4>11</h4>
                    <p>Oficinas de renta</p>
                  </span>
                </div>
                <div className="about-main-text-icons-box">
                  <img src={process.env.PUBLIC_URL + "/images/box3.png"} alt="" className="last-fk" />
                  <span>
                    <h4>12</h4>
                    <p>Años sirviéndote</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner-overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Renta un auto en una sola llamada</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(667) 101-5325</h3>
            </span>
          </div>
        </div>
      </div>
      <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      <Footer />
    </>
  );
}

export default About;