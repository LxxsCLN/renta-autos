function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer-content">
              <ul className="footer-content-1">
                <li>
                  <span>RENTA</span> Autos!
                </li>
                <li>
                    Ofrecemos una gran variedad de autos para todas tus necesidades. Tenemos el auto perfecto para ti.
                </li>
                <li>
                  <a href="tel:6671015325">
                    <i className="fa-solid fa-phone"></i> &nbsp; (667)-101-5325
                  </a>
                </li>
  
                <li>
                  <a
                    href="mailto: 
                    luisespinosbr@gmail.com"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    &nbsp; luisespinosbr@gmail.com
                  </a>
                </li>
  
                <li>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.github.com/LxxsCLN"
                  >
                    Hecho por luiseseberre
                  </a>
                </li>
              </ul>
  
              <ul className="footer-content-2">
                <li>Nosotros</li>
                <li>
                  <a href="#/">Encuéntranos</a>
                </li>
                <li>
                  <a href="#/">Empleos</a>
                </li>
                <li>
                  <a href="#/">App</a>
                </li>
                <li>
                  <a href="#/">Blog</a>
                </li>
                <li>
                  <a href="#/">Cómo operamos</a>
                </li>
              </ul>
  
              <ul className="footer-content-2">
                <li>Horario</li>
                <li>Lun-Vie: 9am - 9pm</li>
                <li>Sab: 9am - 7pm</li>
                <li>Dom: Cerrado</li>
              </ul>
  
              <ul className="footer-content-2">
                <li>Suscríbete</li>
                <li>
                  <p>Ingresa tu correo electrónico para recibir ofertas.</p>
                </li>
                <li>
                  <form id="submitemailinput">
                  <input type="email" placeholder="Ingresa tu correo" ></input>
                  </form>
                </li>
                <li>
                  <button className="submit-email" onClick={(e)=>{
                    e.preventDefault();
                    document.getElementById("submitemailinput").reset()
                  }}>Suscribirse</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;