import Hero from "../components/hero";
import BookCar from "../components/bookcar";
import Footer from "../components/footer";
import PickCar from "../components/pickcar";
import Testimonials from "../components/testimonials";

function Home() {
    return (
      <div className="home">
        <Hero />
        <PickCar />
        <BookCar />
        
        <Testimonials />
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