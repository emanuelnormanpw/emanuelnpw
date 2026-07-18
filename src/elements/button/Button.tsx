import type { ButtonProps } from "./types";
import { buttonCx } from "./styles";

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    children,
    className,
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      css={buttonCx}
      className={`button button--${variant}${fullWidth ? " button--full-width" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      {children}
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </button>
  );
};

export default Button;
