import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

import Regions from "./Regions";
import FlavorShow from "./FlavorShow";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Regions} />
          <Route path="/flavors/:id" component={FlavorShow} />
        </Switch>
        <Link to={"/flavors/1"}>TestLink</Link>
        <br />
        <br />
        <Link to={"/"}>TakeMeHome</Link>
      </BrowserRouter>

    </>
  );
};

export default App;
