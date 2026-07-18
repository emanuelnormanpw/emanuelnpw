import type { CardProps } from "./types";
import { cardCx } from "./styles";

const Card = (props: CardProps) => {
  const {
    variant = "default",
    children,
    className,
    noPadding = false,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      css={cardCx}
      className={`card card--${variant}${noPadding ? " card--no-padding" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
