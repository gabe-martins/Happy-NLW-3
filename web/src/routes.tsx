import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanegesMap from "./pages/OrphanegesMap";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanegesMap} exact />
      </Switch>
    </BrowserRouter>
  );
}
