import Footer from "../components/footer";
import HeroPages from "../components/heropages";
import Testimonials from "../components/testimonials";
import { useState, useEffect } from "react";

function TestimonialsPage() {
  
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

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

        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
