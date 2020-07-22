import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Regions from "./Regions";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Regions} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
