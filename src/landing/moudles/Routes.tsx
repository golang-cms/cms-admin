import { Route, Switch } from "react-router-dom";
import Login from "./login/components/Login";

export const LandingBasePath = "";

const Routes = () => (
  <Switch>
    <Route path={LandingBasePath} exact component={Login} />
  </Switch>
);

export default Routes;
