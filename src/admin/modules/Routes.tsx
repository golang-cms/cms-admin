import React from "react";
import { Route, Switch } from "react-router-dom";
import Post from "./cms/post/components/Post";
import Dashboard from "./dashboard/components/Dashboard";
import Client from "./rms/client/components/Client";
import Reservation from "./rms/reservation/components/Reservation";
import Resource from "./rms/resources/components/Resource";

export const AdminBasePath = "/admin";
export const routesDefinition = [
  { path: AdminBasePath, name: "Dashboard", component: Dashboard },
  { path: AdminBasePath + "/posts", name: "Post", component: Post },
  {
    path: AdminBasePath + "/reservations",
    name: "Reservation",
    component: Reservation,
  },
  {
    path: AdminBasePath + "/resources",
    name: "Resource",
    component: Resource,
  },
  {
    path: AdminBasePath + "/clients",
    name: "Client",
    component: Client,
  },
];

const Routes = () => (
  <Switch>
    {routesDefinition.map(({ path, component }, key) => (
      <Route exact path={path} key={key} component={component} />
    ))}
  </Switch>
);

export default Routes;
