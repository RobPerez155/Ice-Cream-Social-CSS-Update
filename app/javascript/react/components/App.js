import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import RegionsIndexPage from "./RegionsIndexPage";
import RegionShowContainer from "./RegionShowContainer";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RegionsIndexPage} />
          <Route exact path="/regions/:id" component={RegionShowContainer} />

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
