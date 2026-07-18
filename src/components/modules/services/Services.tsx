import { PricingCard } from "./components/pricing-card";
import { servicesSectionCx } from "./styles";
import { PACKAGES } from "./usecase";

const Services = () => {
  return (
    <section
      id="services"
      css={servicesSectionCx}
      aria-labelledby="services-heading"
    >
      <div className="services-inner">
        <p className="services-label">/Services (03)</p>
        <h2 id="services-heading" className="services-heading">
          Portrait packages designed for clarity and results.
        </h2>

        <div className="services-grid">
          {PACKAGES.map((packageItem) => (
            <PricingCard key={packageItem.id} packageItem={packageItem} />
          ))}
        </div>

        <p className="services-footnote">
          All sessions include a private online gallery and high-resolution
          downloads.
        </p>
      </div>
    </section>
  );
};

export default Services;
