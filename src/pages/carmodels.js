import Footer from "../components/footer";
import HeroPages from "../components/heropages";
import { Link } from "react-router-dom";

function CarModels() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Autos" />
        <div className="container">
          <div className="models-div">
            <div className="models-div-box">
              <div className="models-div-box-img">
                <img src={process.env.PUBLIC_URL + "/images/jetta2.jpg"} alt="car_img" />
                <div className="models-div-box-descr">
                  <div className="models-div-box-descr-name-price">
                    <div className="models-div-box-descr-name-price-name">
                      <p>Jetta</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div-box-descr-name-price-price">
                      <h4>$428</h4>
                      <p>por día</p>
                    </div>
                  </div>
                  <div className="models-div-box-descr-name-price-details">
                    <span>
                      <i className="fa-solid fa-car"></i> &nbsp; Volkswagen
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 &nbsp; <i className="fa-solid fa-door-open"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-gear"></i> &nbsp; Automático
                    </span>
                    <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <i className="fa-solid fa-gas-pump"></i>
                    </span>
                  </div>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      <div className="models-div-box-descr-name-price-btn">
                        <span>Rentar</span>
                      </div>                      
                    </Link>                  
                </div>
              </div>
            </div>

            <div className="models-div-box">
              <div className="models-div-box-img">
                <img src={process.env.PUBLIC_URL + "/images/aveo3.jpg"} alt="car_img" />
                <div className="models-div-box-descr">
                  <div className="models-div-box-descr-name-price">
                    <div className="models-div-box-descr-name-price-name">
                      <p>Aveo</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div-box-descr-name-price-price">
                      <h4>$262</h4>
                      <p>por día</p>
                    </div>
                  </div>
                  <div className="models-div-box-descr-name-price-details">
                    <span>
                      <i className="fa-solid fa-car"></i> &nbsp; Chevrolet
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 &nbsp; <i className="fa-solid fa-door-open"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-gear"></i> &nbsp; Automático
                    </span>
                    <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <i className="fa-solid fa-gas-pump"></i>
                    </span>
                  </div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      <div className="models-div-box-descr-name-price-btn">
                        <span>Rentar</span>
                      </div>                      
                    </Link>
                </div>
              </div>
            </div>

            <div className="models-div-box">
              <div className="models-div-box-img">
                <img src={process.env.PUBLIC_URL + "/images/sentra2.jpg"} alt="car_img" />
                <div className="models-div-box-descr">
                  <div className="models-div-box-descr-name-price">
                    <div className="models-div-box-descr-name-price-name">
                      <p>Sentra</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div-box-descr-name-price-price">
                      <h4>$344</h4>
                      <p>por día</p>
                    </div>
                  </div>
                  <div className="models-div-box-descr-name-price-details">
                    <span>
                      <i className="fa-solid fa-car"></i> &nbsp; Nissan
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 &nbsp; <i className="fa-solid fa-door-open"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-gear"></i> &nbsp; Automático
                    </span>
                    <span style={{ textAlign: "right" }}>
                    Híbrido &nbsp; <i className="fa-solid fa-gas-pump"></i>
                    </span>
                  </div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      <div className="models-div-box-descr-name-price-btn">
                        <span>Rentar</span>
                      </div>                      
                    </Link>
                </div>
              </div>
            </div>

            <div className="models-div-box">
              <div className="models-div-box-img">
                <img src={process.env.PUBLIC_URL + "/images/versa2.jpg"} alt="car_img" />
                <div className="models-div-box-descr">
                  <div className="models-div-box-descr-name-price">
                    <div className="models-div-box-descr-name-price-name">
                      <p>Versa</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div-box-descr-name-price-price">
                      <h4>$359</h4>
                      <p>por día</p>
                    </div>
                  </div>
                  <div className="models-div-box-descr-name-price-details">
                    <span>
                      <i className="fa-solid fa-car"></i> &nbsp; Nissan
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 &nbsp; <i className="fa-solid fa-door-open"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-gear"></i> &nbsp; Automático
                    </span>
                    <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <i className="fa-solid fa-gas-pump"></i>
                    </span>
                  </div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      <div className="models-div-box-descr-name-price-btn">
                        <span>Rentar</span>
                      </div>                      
                    </Link>
                </div>
              </div>
            </div>

            <div className="models-div-box">
              <div className="models-div-box-img">
                <img src={process.env.PUBLIC_URL + "/images/rio2.jpg"} alt="car_img" />
                <div className="models-div-box-descr">
                  <div className="models-div-box-descr-name-price">
                    <div className="models-div-box-descr-name-price-name">
                      <p>Rio</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div-box-descr-name-price-price">
                      <h4>$375</h4>
                      <p>por día</p>
                    </div>
                  </div>
                  <div className="models-div-box-descr-name-price-details">
                    <span>
                      <i className="fa-solid fa-car"></i> &nbsp; Kia
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 &nbsp; <i className="fa-solid fa-door-open"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-gear"></i> &nbsp; Automático
                    </span>
                    <span style={{ textAlign: "right" }}>
                    Híbrido &nbsp; <i className="fa-solid fa-gas-pump"></i>
                    </span>
                  </div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      <div className="models-div-box-descr-name-price-btn">
                        <span>Rentar</span>
                      </div>                      
                    </Link>
                </div>
              </div>
            </div>

            <div className="models-div-box">
              <div className="models-div-box-img">
                <img src={process.env.PUBLIC_URL + "/images/corolla2.jpg"} alt="car_img" />
                <div className="models-div-box-descr">
                  <div className="models-div-box-descr-name-price">
                    <div className="models-div-box-descr-name-price-name">
                      <p>Corolla</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div-box-descr-name-price-price">
                      <h4>$310</h4>
                      <p>por día</p>
                    </div>
                  </div>
                  <div className="models-div-box-descr-name-price-details">
                    <span>
                      <i className="fa-solid fa-car"></i> &nbsp; Toyota
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4 &nbsp; <i className="fa-solid fa-door-open"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-gear"></i> &nbsp; Automático
                    </span>
                    <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <i className="fa-solid fa-gas-pump"></i>
                    </span>
                  </div>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      <div className="models-div-box-descr-name-price-btn">
                        <span>Rentar</span>
                      </div>                      
                    </Link>
                </div>
              </div>
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
        <Footer />
      </section>
    </>
  );
}

export default CarModels;
