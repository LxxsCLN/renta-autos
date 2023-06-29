import Hero from "../components/hero";
import BookCar from "../components/bookcar";
import Footer from "../components/footer";

function Home() {
    return (
      <div className="home">
        <Hero />
        <BookCar />
        {/* <Hero />
        <BookCar />
        <PlanTrip />
        <PickCar />
        <Banner />
        <ChooseUs />
        <Testimonials />
        <Faq />
        <Download />
        <Footer /> */}
        <Footer />
      </div>
    );
  }
  
  export default Home;