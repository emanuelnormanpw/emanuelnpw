import { createBrowserRouter, type RouteObject } from "react-router-dom";

type DOMRouterOptions = NonNullable<
  Parameters<typeof createBrowserRouter>["1"]
>;

function customBrowserRouter(
  routes: RouteObject[],
  options: DOMRouterOptions = { window },
) {
  return createBrowserRouter(routes, options);
}

export default customBrowserRouter;
