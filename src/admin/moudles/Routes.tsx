import React from "react";
import { Route, Switch } from "react-router-dom";
import { BasePath } from "../../App";
import Dashboard from "./dashboard/component/Dashboard";
import Post from "./post/component/Post";

export const AdminBasePath = BasePath + "/admin"
const Routes = () => (
    <Switch>
        <Route path={AdminBasePath} exact component={Dashboard} />
        <Route path={AdminBasePath + "/post"} component={Post} />
    </Switch>
)

export default Routes;