import { RouterProvider } from "react-router-dom";

import { GlobalProvider } from "./components/provider/global-provider";

import routes from "./routes";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={routes} />
    </GlobalProvider>
  );
};

export default App;
