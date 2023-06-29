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
        name: "VW Golf 6",
        price: "37",
        img: "",
        model: "Golf 6",
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        air: "Yes",
        transmission: "Manual",
        fuel: "Diesel",
      },
    ],
    [
      {
        name: "Audi A1 S-Line",
        price: "45",
        img: "",
        model: "Audi",
        mark: "A1",
        year: "2012",
        doors: "4/5",
        air: "Yes",
        transmission: "Manual",
        fuel: "Gasoline",
      },
    ],
    [
      {
        name: "Toyota Camry",
        price: "30",
        img: "",
        model: "Camry",
        mark: "Toyota",
        year: "2006",
        doors: "4/5",
        air: "Yes",
        transmission: "Automatic",
        fuel: "Hybrid",
      },
    ],
    [
      {
        name: "BMW 320 ModernLine",
        price: "35",
        img: "",
        model: "320",
        mark: "BMW",
        year: "2012",
        doors: "4/5",
        air: "Yes",
        transmission: "Manual",
        fuel: "Diesel",
      },
    ],
    [
      {
        name: "Mercedes-Benz GLK",
        price: "50",
        img: "",
        model: "Benz GLK",
        mark: "Mercedes",
        year: "2006",
        doors: "4/5",
        air: "Yes",
        transmission: "Manual",
        fuel: "Diesel",
      },
    ],
    [
      {
        name: "VW Passat CC",
        price: "25",
        img: "",
        model: "Passat CC",
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        air: "Yes",
        transmission: "Automatic",
        fuel: "Gasoline",
      },
    ],
  ];

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
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
