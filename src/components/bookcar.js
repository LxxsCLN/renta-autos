function BookCar() {
  
  return (
    <>
      <section id="booking-section" className="book-section">
        
        <div className="container">
          <div className="book-content">
            <div className="book-content-box">
              <h2>Renta un auto</h2>

              <form className="box-form">
                <div className="box-form-car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Elige El Auto <b>*</b>
                  </label>
                  <select>
                    <option>Elige el auto</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form-car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Entrega{" "}
                    <b>*</b>
                  </label>
                  <select>
                    <option>Elige el lugar de entrega</option>
                    <option>Culiacán</option>
                    <option>Mazatlán</option>
                    <option>Los Mochis</option>
                    <option>Guasave</option>
                    <option>Guamúchil</option>
                  </select>
                </div>

                <div className="box-form-car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Devolución{" "}
                    <b>*</b>
                  </label>
                  <select>
                    <option>Elige el lugar de devolución</option>
                    <option>Culiacán</option>
                    <option>Mazatlán</option>
                    <option>Los Mochis</option>
                    <option>Guasave</option>
                    <option>Guamúchil</option>
                  </select>
                </div>

                <div className="box-form-car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Fecha de Entrega <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    type="date"
                  ></input>
                </div>

                <div className="box-form-car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Fecha de Devolución <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    type="date"
                  ></input>
                </div>

                <button type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default BookCar;