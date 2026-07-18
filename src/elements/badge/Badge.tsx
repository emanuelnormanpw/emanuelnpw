import type { BadgeProps } from "./types";
import { badgeCx } from "./styles";

const Badge = (props: BadgeProps) => {
  const { variant = "light", children, className, ...rest } = props;

  return (
    <span
      {...rest}
      css={badgeCx}
      className={`badge badge--${variant}${className ? ` ${className}` : ""}`}
    >
      {children}
    </span>
  );
};

export default Badge;
