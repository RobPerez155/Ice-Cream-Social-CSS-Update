import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Regions from "./Regions";
import RegionTile from "./RegionTile";

const App = (props) => {
  return (
    <>
      <h1>Ice Cream!!!</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Regions} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
