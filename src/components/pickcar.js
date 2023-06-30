import { useState } from "react";
import CarBox from "./carbox";

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  const carsarray = [
    
    [
      {
        name: "Chevrolet Aveo",
        price: "262",
        img: "/images/aveo.png",
        model: "Aveo",
        mark: "Chevrolet",
        year: "2019",
        doors: "4",
        air: "Sí",
        transmission: "Automático",
        fuel: "Gasolina",
      },
    ],
    [
      {
        name: "Volkswagen Jetta",
        price: "428",
        img: "/images/jetta.png",
        model: "Jetta",
        mark: "Volkswagen",
        year: "2022",
        doors: "4",
        air: "Sí",
        transmission: "Estándar",
        fuel: "Gasolina",
      },
    ],
    [
      {
        name: "Nissan Sentra",
        price: "344",
        img: "/images/sentra.png",
        model: "Sentra",
        mark: "Nissan",
        year: "2022",
        doors: "4",
        air: "Sí",
        transmission: "Estándar",
        fuel: "Híbrido",
      },
    ],
    [
      {
        name: "Nissan Versa",
        price: "359",
        img: "/images/versa.png",
        model: "Versa",
        mark: "Nissan",
        year: "2021",
        doors: "4",
        air: "Sí",
        transmission: "Automático",
        fuel: "Gasolina",
      },
    ],
    [
      {
        name: "Kia Rio",
        price: "375",
        img: "/images/rio.png",
        model: "Rio",
        mark: "Kia",
        year: "2020",
        doors: "4",
        air: "Sí",
        transmission: "Estándar",
        fuel: "Híbrido",
      },
    ],
    [
      {
        name: "Toyota Corolla",
        price: "310",
        img: "/images/corolla.png",
        model: "Corolla",
        mark: "Toyota",
        year: "2021",
        doors: "4",
        air: "Sí",
        transmission: "Automático",
        fuel: "Gasolina",
      },
    ],
  ];

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container-title">
              <h3>Modelos de autos en renta</h3>
              <h2>Nuestros Autos</h2>
              <p>
              Elije entre una variedad de increíbles autos para 
              rentar para tu próxima aventura o viaje de negocios
              </p>
            </div>
            <div className="pick-container-car-content">
              
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Volkswagen Jetta
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  Chevrolet Aveo
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Nissan Sentra
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  Nissan Versa
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Kia Rio
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  Toyota Corolla
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={carsarray} carID={0} />}
              {active === "SecondCar" && <CarBox data={carsarray} carID={1} />}
              {active === "ThirdCar" && <CarBox data={carsarray} carID={2} />}
              {active === "FourthCar" && <CarBox data={carsarray} carID={3} />}
              {active === "FifthCar" && <CarBox data={carsarray} carID={4} />}
              {active === "SixthCar" && <CarBox data={carsarray} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
