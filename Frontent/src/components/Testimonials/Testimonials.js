import { useState, useEffect } from "react";
import "./Testimonials.css"; // Add styles here
import backgroundImage from "../assets/background.png"; // Adjust the relative path accordingly

const testimonials = [
  {
    text: "The cakes are an absolute delight! Every bite melts in your mouth, and the flavors are always on point. I ordered the chocolate cake for my birthday, and it was the star of the party. Highly recommended!",
    name: "Ananya Sharma",
  },
  {
    text: "Absolutely loved the pastries! They were fresh, delicious, and beautifully decorated. Perfect for any occasion!",
    name: "Rohan Mehta",
  },
  {
    text: "Great customer service and even better desserts! The variety of options and the taste is unbeatable. Will order again!",
    name: "Sneha Kapoor",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Trigger fade effect before changing testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(false);
      }, 500); // Wait for fade out duration
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const prevTestimonial = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setFade(false);
    }, 500); // Wait for fade out duration
  };

  const nextTestimonial = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(false);
    }, 500); // Wait for fade out duration
  };

  return (
    <>
    <h2 className="testimonials-heading">Testimonials</h2>
      <section className="testimonials-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="testimonials-container">
        <div className="testimonial-box">
          <div className={`testimonial-content ${fade ? 'fade-out' : 'fade-in'}`}>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
          </div>
          <div className="testimonial-navigation">
            <button className="nav-btn" onClick={prevTestimonial}>
              {"<"}
            </button>
            <button className="nav-btn" onClick={nextTestimonial}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
