import Footer from "../components/footer";
import HeroPages from "../components/heropages";
import { useState, useEffect } from "react";

function Contact() {

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
      <section className="contact-page">
        <HeroPages name="Contacto" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div-text">
              <h2>¿Necesitas información adicional?</h2>
              <p>
                Escríbenos con tu pregunta o sugerencia y un ejecutivo se pondrá
                 en contacto contigo lo más pronto posible.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (667) 101-5325
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                luisespinosbr@gmail.com
              </a>
            </div>
            <div className="contact-div-form">
              <form id="box-form22">
                <label>
                  Nombre Completo <b>*</b>
                </label>
                <input type="text" placeholder='Ingresa tu nombre...'></input>

                <label>
                  Correo Electrónico <b>*</b>
                </label>
                <input type="email" placeholder="Ingresa tu correo electrónico..."></input>

                <label>
                  Escribe tu Pregunta <b>*</b>
                </label>
                <textarea placeholder="Escribe tu pregunta..."></textarea>

                <button onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("box-form22").reset()
                }} type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
}

export default Contact;
