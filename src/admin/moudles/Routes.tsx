import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/components/Dashboard";
import Post from "./post/components/Post";

export const AdminBasePath = "/admin";
const Routes = () => (
  <Switch>
    <Route path={AdminBasePath} exact component={Dashboard} />
    <Route path={AdminBasePath + "/post"} component={Post} />
  </Switch>
);

export default Routes;
