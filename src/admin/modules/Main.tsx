import { Container, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Copyright from "./common/components/layout/CopyRight";
import LeftMenu from "./common/components/layout/LeftMenu";
import TopBar from "./common/components/layout/TopBar";
import { ToggleProvider } from "./common/providers/ToggleProvider";
import Routes from "./Routes";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ToggleProvider>
        <TopBar />
        <LeftMenu />
      </ToggleProvider>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {/* <Container maxWidth="lg" className={classes.container}> */}
        <Container className={classes.container}>
          <Routes />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Main;
