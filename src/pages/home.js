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
        <Footer />
      </div>
    );
  }
  
  export default Home;