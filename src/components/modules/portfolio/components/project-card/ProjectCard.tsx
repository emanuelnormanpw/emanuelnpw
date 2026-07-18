import { Badge } from "@elements/badge";

import type { ProjectCardProps } from "./types";

const ProjectCard = (props: ProjectCardProps) => {
  const { item } = props;

  const content = (
    <>
      <div className="project-media">
        <img
          className="project-media-placeholder"
          src={item.image}
          alt={`${item.category}: ${item.title}`}
        />
        <div className="project-badge">
          <Badge variant="light">{item.category}</Badge>
        </div>
      </div>
      <div className="project-body">
        <p className="project-date">
          <time dateTime={item.date}>{item.date}</time>
        </p>
        <h3 className="project-title">{item.title}</h3>
        <p className="project-description">{item.description}</p>
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        className="project-card"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.title}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className="project-card project-card--static"
      aria-label={item.title}
    >
      {content}
    </article>
  );
};

export default ProjectCard;
