import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RequestProvider } from "./providers/request/RequestProvider";
//import GlobalStyles from "./GlobalStyles";
import "./styles.css";
import theme from "./theme";
const AdminComponent = lazy(() => import("./admin/moudles/Main"));
const LandingComponent = lazy(() => import("./landing/moudles/Main"));

const app = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MuiThemeProvider theme={theme}>
        <RequestProvider>
          <CssBaseline />
          {/*<GlobalStyles /> */}
          {/* <Pace color={theme.palette.primary.light} /> */}
          <Suspense fallback={<Fragment />}>
            <Switch>
              <Route path={"/admin"}>
                <AdminComponent />
              </Route>
              <Route>
                <LandingComponent />
              </Route>
            </Switch>
          </Suspense>
        </RequestProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default app;
