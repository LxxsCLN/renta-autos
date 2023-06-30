function BookCar() {
  
  return (
    <>
      <section id="booking-section" className="book-section">
        
        <div className="container">
          <div className="book-content">
            <div className="book-content-box">
              <h2>Renta un auto</h2>

              <form className="box-form" id="box-form">
                <div className="box-form-car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Elige El Auto <b>*</b>
                  </label>
                  <select>
                    <option>Elige el auto</option>
                    <option value="Volkswagen Jetta">Volkswagen Jetta</option>
                    <option value="Chevrolet Aveo">Chevrolet Aveo</option>
                    <option value="Nissan Sentra">Nissan Sentra</option>
                    <option value="Nissan Versa">Nissan Versa</option>
                    <option value="Kia Rio">Kia Rio</option>
                    <option value="Toyota Corolla">Toyota Corolla</option>
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

                <button type="submit" onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById("box-form").reset()
                }} >
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