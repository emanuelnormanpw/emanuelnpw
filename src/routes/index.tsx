import { createElement } from "react";

import { customBrowserRouter } from "@utils/react-router-dom";

import { DefaultLayout } from "@layouts/default-layout";
import { Home } from "@modules/home";

const routes = customBrowserRouter([
  {
    element: createElement(DefaultLayout),
    children: [
      {
        index: true,
        element: createElement(Home),
      },
    ],
  },
]);

export default routes;
