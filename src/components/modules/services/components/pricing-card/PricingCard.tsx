import { Button } from "@elements/button";
import { CheckCircle } from "@shapes/check-circle";

import type { PricingCardProps } from "./types";

const PricingCard = (props: PricingCardProps) => {
  const { packageItem } = props;

  return (
    <article
      className={`pricing-card${
        packageItem.popular ? " pricing-card--popular" : ""
      }`}
      aria-labelledby={`pkg-${packageItem.id}-title`}
    >
      {packageItem.badge && (
        <span
          className="pricing-popular-badge"
          aria-label="Most popular package"
        >
          {packageItem.badge}
        </span>
      )}

      <div className="pricing-card-body">
        <p className="pricing-ready">( {packageItem.readyLabel} )</p>
        <h3 id={`pkg-${packageItem.id}-title`} className="pricing-title">
          {packageItem.title}
        </h3>
        <p className="pricing-desc">{packageItem.description}</p>
      </div>

      <div className="pricing-strip">
        <div className="pricing-strip-item">
          <p className="pricing-strip-value">{packageItem.duration}</p>
          <p className="pricing-strip-label">Duration</p>
        </div>
        <div className="pricing-strip-item">
          <p className="pricing-strip-value">{packageItem.price}</p>
          <p className="pricing-strip-label">Price</p>
        </div>
      </div>

      <ul
        className="pricing-features"
        aria-label={`${packageItem.title} features`}
      >
        {packageItem.features.map((feature) => (
          <li key={feature.text} className="pricing-feature-item">
            <span
              className={`pricing-feature-icon${
                feature.included ? "" : " pricing-feature-icon--excluded"
              }`}
              aria-hidden="true"
            >
              <CheckCircle width={14} height={14} />
            </span>
            <span
              className={
                feature.included ? "" : "pricing-feature-text--excluded"
              }
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="pricing-cta">
        <Button
          variant={packageItem.popular ? "primary" : "secondary"}
          fullWidth
        >
          Reserve Now
        </Button>
      </div>
    </article>
  );
};

export default PricingCard;
