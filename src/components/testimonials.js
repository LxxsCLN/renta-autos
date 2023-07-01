function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content-title">
              <h4>Recomendaciones</h4>
              <h2>Testimonios de Clientes</h2>
              <p>
                Descubre el impacto positivo que les hemos dejado a nuestros clientes
                leyendo sus testimonios. Nuestros clientes han experimentado nuestro
                servicio y resultados, y están ansiosos por compartir sus experiencias
                positivas con ustedes.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials-box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                    "Rentamos un auto en este sitio web y tuvimos una 
                    muy buena experiencia! Reservar fue muy sencillo y 
                    las tarifas de renta eran muy accesibles"
                </p>
                <div className="all-testimonials-box-name">
                  <div className="all-testimonials-box-name-profile">
                    <img src={process.env.PUBLIC_URL + "/images/portrait1.jpg"} alt="" />
                    <span>
                      <h4>Jesús Rodríguez</h4>
                      <p>Culiacán</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials-box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                    "El auto estaba en excelentes condiciones y a muy buen precio. Recomiendo ampliamente esta página para rentar un auto!"
                </p>
                <div className="all-testimonials-box-name">
                  <div className="all-testimonials-box-name-profile">
                    <img src={process.env.PUBLIC_URL + "/images/portrait2.jpg"} alt="" />
                    <span>
                      <h4>Ana López</h4>
                      <p>Mazatlán</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
