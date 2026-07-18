import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "light" | "dark" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children?: ReactNode;
}
