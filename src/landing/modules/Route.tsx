import { Switch, Route } from "react-router-dom";
import Login from "./login/Login";

const Routes = () => {
  <Switch>
    <Route path={LandingBasePath} exact component={Login} />
  </Switch>;
};

export const LandingBasePath = "";

export default Routes;
