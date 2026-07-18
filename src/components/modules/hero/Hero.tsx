import meImg from "@assets/compressed_me.webp";
import projectCompA from "@assets/projects/project-comp-1.webp";
import projectCompB from "@assets/projects/project-comp-2.webp";
import projectCompC from "@assets/projects/project-comp-3.webp";

import { Badge } from "@elements/badge";
import { ArrowRight } from "@shapes/arrow-right";

import { heroSectionCx } from "./styles";
import { SOCIAL_LINKS, TECH_STACKS } from "./usecase";

const Hero = () => {
  return (
    <section css={heroSectionCx} aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-card">
          <h1 className="hero-title">
            EMANUEL <span className="transparent-hero-title">NORMAN PW</span>
          </h1>

          <div className="hero-content-grid">
            {/* Left: Featured image + Selected Work label */}
            <div className="hero-left">
              <div className="hero-featured">
                <img src={meImg} alt="Emanuel Norman Putera Wardhana" />
                <div className="hero-featured-overlay">
                  <p className="hero-featured-label">Tech Stacks</p>
                  <h2 className="hero-featured-title">
                    <span className="hero-featured-track">
                      <span className="hero-featured-set">
                        {TECH_STACKS.map((techStack) => (
                          <Badge
                            key={techStack.label}
                            variant="light"
                            className="hero-featured-tech"
                          >
                            {techStack.label}
                          </Badge>
                        ))}
                      </span>
                      <span
                        className="hero-featured-set hero-featured-set--clone"
                        aria-hidden="true"
                      >
                        {TECH_STACKS.map((techStack) => (
                          <Badge
                            key={`clone-${techStack.label}`}
                            variant="light"
                            className="hero-featured-tech"
                          >
                            {techStack.label}
                          </Badge>
                        ))}
                      </span>
                    </span>
                  </h2>
                  <a href="#portfolio" className="hero-featured-cta">
                    View Work <ArrowRight />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Profile card + decorative strip + social links */}
            <div className="hero-right">
              <div className="profile-card">
                <div>
                  <h2 className="profile-name">
                    Emanuel Norman Putera Wardhana
                  </h2>
                  <p className="profile-role">
                    Frontend Web Developer | Content Creator
                  </p>
                </div>
                <p className="profile-bio">
                  I'm a Frontend Web Engineer with over four years of experience
                  in the field. I have expertise in the development of scalable,
                  high-performance web applications using React, TypeScript and
                  Next.js. I'm also skilled in frontend architecture, API
                  integration, SSR and SEO optimization.
                </p>
              </div>

              <div className="decorative-strip" aria-hidden="true">
                <img
                  src={projectCompA}
                  className="decorative-strip-item"
                  alt="Project Component 1"
                />
                <img
                  src={projectCompB}
                  className="decorative-strip-item"
                  alt="Project Component 2"
                />
                <img
                  src={projectCompC}
                  className="decorative-strip-item"
                  alt="Project Component 3"
                />
              </div>

              <nav aria-label="Social links">
                <ul className="social-links" role="list">
                  {SOCIAL_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="social-link"
                        rel="noopener noreferrer"
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                      >
                        {link.label} <ArrowRight width={12} height={12} />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
