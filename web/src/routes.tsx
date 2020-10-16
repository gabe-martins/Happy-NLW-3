import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateOrphanage from "./pages/CreateOrphanage";
import Landing from "./pages/Landing";
import Orphanage from "./pages/Orphanage";
import OrphanegesMap from "./pages/OrphanegesMap";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/map" component={OrphanegesMap} exact />
        <Route path="/create" component={CreateOrphanage} exact />
        <Route path="/orphanage/:id" component={Orphanage} exact />
      </Switch>
    </BrowserRouter>
  );
}
