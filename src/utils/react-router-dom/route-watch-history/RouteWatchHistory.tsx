import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { routeHistory } from "./RouteHistory";

const RouteWatchHistory = () => {
  const location = useLocation();

  useEffect(() => {
    routeHistory.push(location);
  }, [location]);

  useEffect(() => {
    function onPopState(event: PopStateEvent) {
      routeHistory.pop(event.state.idx);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return null;
};

export default RouteWatchHistory;
