import { RouteObject as DefaultRouteObject } from "react-router-dom";

export type RouteAccess = "public" | "protected" | "private";

export type RouteObject = Omit<DefaultRouteObject, "children"> & {
  /**
   * This is used to identify the route access that you have define
   *
   * "public" | undefined -> Allowed to be access with and without authorization key
   * "protected" -> Allowed to be access without authorization key
   * "private" -> Allowed to be access with authorization key
   *
   * @default "public"
   */
  access?: RouteAccess;
  children?: RouteObject[];
};
