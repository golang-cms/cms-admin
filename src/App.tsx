import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React, { Fragment, lazy, Suspense, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import { RequestProvider } from "./providers/request/RequestProvider";
import { TokenContext, TokenProvider } from "./providers/token/TokenProvider";
//import GlobalStyles from "./GlobalStyles";
import "./styles.css";
import theme from "./theme";
const AdminComponent = lazy(() => import("./admin/modules/Main"));
const LandingComponent = lazy(() => import("./landing/modules/Main"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TokenProvider>
        <RequestProvider>
          <CssBaseline />
          <Routes />
          {/*<GlobalStyles /> */}
          {/* <Pace color={theme.palette.primary.light} /> */}
        </RequestProvider>
      </TokenProvider>
    </ThemeProvider>
  );
};

const Routes = () => {
  const [token] = useContext(TokenContext);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Fragment />}>
        <Switch>
          {token ? (
            <PrivateRoute
              path={"/"}
              component={AdminComponent}
              isSignedIn={token ? true : false}
            />
          ) : (
            <Route>
              <LandingComponent />
            </Route>
          )}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
