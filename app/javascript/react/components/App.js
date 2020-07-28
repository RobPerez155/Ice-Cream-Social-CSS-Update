import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

import RegionsIndexPage from "./RegionsIndexPage";
import ReviewForm from "./ReviewForm";
import RegionShowContainer from "./RegionShowContainer";
import FlavorShowPage from "./FlavorShowPage";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RegionsIndexPage} />
          <Route exact path="/regions/:id" component={RegionShowContainer} />
          <Route exact path="/flavors/:id" component={FlavorShowPage} />
          <Route
            exact
            path="/flavors/:flavor_id/reviews/new"
            component={ReviewForm}
          />
        </Switch>
        <Link to={"/ReviewForm"}>ReviewForm</Link>
      </BrowserRouter>
    </>
  );
};

export default App;
