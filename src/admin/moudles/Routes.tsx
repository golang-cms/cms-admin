import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/components/Dashboard";
import Post from "./post/components/Post";

export const AdminBasePath = "/admin";
export const routesDefinition = [
  { path: AdminBasePath, name: "Dashboard", component: Dashboard },
  { path: AdminBasePath + "/post", name: "Post", component: Post },
];

const Routes = () => (
  <Switch>
    {routesDefinition.map(({ path, component }, key) => (
      <Route exact path={path} key={key} component={component} />
    ))}
  </Switch>
);

export default Routes;
