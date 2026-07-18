import type { Location } from "react-router-dom";

class RouteHistory {
  public history: Array<Location>;

  constructor() {
    this.history = [];
  }

  push(location: Location) {
    if (this.history.length > 0) {
      const prevKey = this.history[this.history.length - 1].key;
      if (prevKey === location.key) {
        return this;
      }
    }

    this.history.push(location);
    return this;
  }

  getPrev() {
    const history = [...this.history];

    if (history.length > 1) {
      history.pop();
    }

    return history[history.length - 1];
  }

  pop(startIndex?: number) {
    if (typeof startIndex !== "undefined") {
      this.history.splice(startIndex, this.history.length - startIndex);
    } else {
      this.history.pop();
    }

    return this.history;
  }
}

export const routeHistory = new RouteHistory();
