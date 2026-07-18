import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant = "default" | "muted" | "dark";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children?: ReactNode;
  noPadding?: boolean;
}
