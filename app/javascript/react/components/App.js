import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

import Regions from "./Regions";
import ReviewForm from "./ReviewForm";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Regions} />
          <Route exact path="/ReviewForm" component={ReviewForm} />
        </Switch>
        <Link to={"/ReviewForm"}>ReviewForm</Link>
      </BrowserRouter>
    </>
  );
};

export default App;
