import { experienceTimelineCx } from "./styles";
import type { ExperienceTimelineProps } from "./types";

import { useExperienceTimeline } from "../../usecase";

const ExperienceTimeline = (props: ExperienceTimelineProps) => {
  const { items } = props;
  const {
    activeIndex,
    activeItem,
    handleSelect,
    handleTimelineInteractionStart,
    handleTimelineScroll,
    handleTimelineKeyDown,
    setViewportRef,
    setTabRef,
    timelineOrientation,
  } = useExperienceTimeline(items);

  if (!activeItem) {
    return null;
  }

  return (
    <div css={experienceTimelineCx}>
      <div className="experience-timeline-layout">
        <article
          key={activeItem.id}
          id={`experience-panel-${activeItem.id}`}
          className="experience-card"
          role="tabpanel"
          aria-labelledby={`experience-tab-${activeItem.id}`}
          aria-live="polite"
        >
          <div className="experience-meta">
            <p className="experience-year">Started in {activeItem.startYear}</p>
            <p className="experience-company">{activeItem.company}</p>
          </div>
          <div className="experience-content">
            <h3 className="experience-role">{activeItem.role}</h3>
            <p className="experience-summary">{activeItem.summary}</p>
          </div>
        </article>

        <div
          ref={setViewportRef}
          className="timeline-viewport"
          onScroll={handleTimelineScroll}
          onTouchStart={handleTimelineInteractionStart}
          onWheel={handleTimelineInteractionStart}
        >
          <ol
            className="timeline-list"
            role="tablist"
            aria-label="Work history"
            aria-orientation={timelineOrientation}
          >
            <li
              className="timeline-spacer"
              role="presentation"
              aria-hidden="true"
            />
            {items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <li key={item.id} className="timeline-item" role="presentation">
                  <button
                    ref={setTabRef(index)}
                    id={`experience-tab-${item.id}`}
                    className="timeline-node"
                    type="button"
                    role="tab"
                    aria-controls={`experience-panel-${item.id}`}
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleSelect(index)}
                    onKeyDown={(event) =>
                      handleTimelineKeyDown(event, index)
                    }
                  >
                    <span className="timeline-start-year">
                      {item.startYear}
                    </span>
                  </button>
                </li>
              );
            })}
            <li
              className="timeline-spacer"
              role="presentation"
              aria-hidden="true"
            />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
