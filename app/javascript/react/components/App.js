import React from "react";
import Regions from "./Regions";
import react, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import RegionTile from "./RegionTile";

export const App = (props) => {

return (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Regions} />
        {/* Temp placeholder <Route exact path="/regions/:id" component={RegionShowPage} /> */}
      </Switch>
    </BrowserRouter>
  </>
);

};
export default App;
