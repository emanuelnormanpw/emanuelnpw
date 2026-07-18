import type { TestimonialCardProps } from "./types";

const TestimonialCard = (props: TestimonialCardProps) => {
  const { testimonial } = props;

  return (
    <figure className="testimonial-card">
      <blockquote>
        <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="testimonial-author">
        <div
          className="testimonial-avatar"
          role="img"
          aria-label={`${testimonial.name} avatar`}
        />
        <div>
          <p className="testimonial-name">{testimonial.name}</p>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
