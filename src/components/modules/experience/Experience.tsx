import { ExperienceTimeline } from "./components/experience-timeline";
import { experienceSectionCx } from "./styles";
import type { ExperienceProps } from "./types";
import { EXPERIENCE_ITEMS } from "./usecase";

const Experience = (props: ExperienceProps) => {
  const { items = EXPERIENCE_ITEMS } = props;

  return (
    <section
      id="experience"
      css={experienceSectionCx}
      aria-labelledby="experience-heading"
    >
      <div className="experience-inner">
        <h2 id="experience-heading" className="experience-heading">
          Experience
        </h2>
        <ExperienceTimeline items={items} />
      </div>
    </section>
  );
};

export default Experience;
