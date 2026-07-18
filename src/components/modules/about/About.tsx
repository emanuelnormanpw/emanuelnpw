import photography1200 from "@assets/optimized-img/about/photography-1200.webp";
import photography1600 from "@assets/optimized-img/about/photography-1600.webp";
import photography640 from "@assets/optimized-img/about/photography-640.webp";

import { AboutPhotoCarousel } from "./components/about-photo-carousel";

import { aboutSectionCx } from "./styles";
import { ABOUT_PHOTOS } from "./usecase";

const About = () => {
  return (
    <section id="about" css={aboutSectionCx} aria-labelledby="about-heading">
      <div className="about-inner">
        <div>
          <p className="about-label">
            /About <span className="about-tagline">(02)</span>
          </p>
          <p className="about-tagline-heading">Behind the scenes.</p>
        </div>

        <div className="about-grid">
          <img
            className="about-image"
            src={photography640}
            srcSet={`${photography640} 640w, ${photography1200} 1200w, ${photography1600} 1600w`}
            sizes="(min-width: 80rem) 73.6rem, calc(100vw - 9rem)"
            width={1600}
            height={932}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="about-content">
            <h2 id="about-heading" className="about-heading">
              &ldquo;To see the world, things dangerous to come to, to see
              behind walls, draw closer to others, to find each other, and to
              feel. That is the purpose of life.&rdquo;
            </h2>
            <div className="about-body-group">
              <p className="about-body">
                When I'm not working, I just love being outdoors, especially
                hiking and exploring new places. I absolutely love photography!
                It's my favourite way to capture the little moments, the
                beautiful landscapes, and the stories behind every trip. I also
                create content on YouTube, where I share parts of my journey,
                experiences, and behind the scenes moments from my life. For me,
                these hobbies are a way to stay curious, creative, and connected
                with the world around me.
              </p>
            </div>
          </div>
        </div>

        <div className="about-stats-grid">
          <AboutPhotoCarousel photos={ABOUT_PHOTOS} />
        </div>
      </div>
    </section>
  );
};

export default About;
