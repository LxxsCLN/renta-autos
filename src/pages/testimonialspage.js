import Footer from "../components/footer";
import HeroPages from "../components/heropages";
import Testimonials from "../components/testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonios" />
        <Testimonials />
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

export default TestimonialsPage;
