import { ProjectCard } from "./components/project-card";
import { portfolioSectionCx } from "./styles";
import type { PortfolioProps } from "./types";
import { DEFAULT_ITEMS } from "./usecase";

const Portfolio = (props: PortfolioProps) => {
  const { items = DEFAULT_ITEMS } = props;

  return (
    <section
      id="portfolio"
      css={portfolioSectionCx}
      aria-labelledby="portfolio-heading"
    >
      <div className="portfolio-inner">
        <header className="portfolio-header">
          <div>
            <p className="portfolio-label">
              /Portfolio ({String(items.length).padStart(2, "0")})
            </p>
            <h2 id="portfolio-heading" className="portfolio-heading">
              Latest projects from my portfolio.
            </h2>
            <p className="portfolio-description">
              A selection of projects that reflects my experience building
              responsive, reliable, and maintainable web applications.
            </p>
          </div>
        </header>

        <div className="portfolio-grid">
          {items.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
