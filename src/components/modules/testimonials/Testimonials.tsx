import { Button } from "@elements/button";
import { ArrowRight } from "@shapes/arrow-right";

import { TestimonialCard } from "./components/testimonial-card";
import { testimonialsSectionCx } from "./styles";
import { TESTIMONIALS } from "./usecase";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      css={testimonialsSectionCx}
      aria-labelledby="testimonials-heading"
    >
      <div className="testimonials-inner">
        <header className="testimonials-header">
          <p className="testimonials-label">/Testimonials (100+)</p>
          <h2 id="testimonials-heading" className="testimonials-heading">
            Clients say working with Suzy Liu blends thoughtful direction and
            meticulous light.
          </h2>
          <p className="testimonials-desc">
            Helping brands grow with confidence through intentional photography
            that resonates.
          </p>
          <Button
            variant="secondary"
            rightIcon={<ArrowRight />}
            className="testimonials-cta-btn"
          >
            Read all reviews
          </Button>
        </header>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
