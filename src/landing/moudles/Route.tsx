import { Switch, Route } from "react-router-dom";
import Main from "./Main";

const Routes = () => {
  <Switch>
    <Route path="/" exact component={Main} />
  </Switch>;
};
