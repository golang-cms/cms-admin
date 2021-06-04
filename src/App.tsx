import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
//import GlobalStyles from "./GlobalStyles";
import "./styles.css";
const AdminComponent = lazy(() => import("./admin/moudles/Main"));
const LandingComponent = lazy(() => import("./landing/moudles/Main"));


const app = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/*<GlobalStyles /> */}
        {/* <Pace color={theme.palette.primary.light} /> */}
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/admin">
              <AdminComponent />
            </Route>
            <Route>
              <LandingComponent />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default app;
