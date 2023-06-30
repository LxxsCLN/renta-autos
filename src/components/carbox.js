import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={process.env.PUBLIC_URL + car.img}
              alt=""
              onLoad={() => setCarLoad(false)}
            />
          </div>
          
          <div className="pick-description">
            <div className="pick-description-price">
              <span>${car.price}</span>/ por día
            </div>
            <div className="pick-description-table">
              <div className="pick-description-table-col">
              <span>Marca</span>
                <span>{car.mark}</span>
                
              </div>

              <div className="pick-description-table-col">
              <span>Modelo</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Año</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Puertas</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description-table-col">
                <span>A/C</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Transmisión</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Combustible</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            
            <a className="cta-btn" href="#/">
              Reserva Ahora
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
