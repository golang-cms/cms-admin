import { Typography, Badge } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import React, { useContext } from "react";
import { drawerWidth } from "../../Main";
import { ToggleContext } from "../providers/ToggleProvider";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useLocation } from "react-router-dom";
import { routesDefinition } from "../../Routes";
import { TokenContext } from "../../../../providers/token/TokenProvider";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useContext(ToggleContext);
  const [, , resetToken] = useContext(TokenContext);
  const handleDrawerOpen = () => {
    setToggle(true);
  };
  const location = useLocation();
  const currentRoute = routesDefinition.find(
    ({ path }) => path === location.pathname
  );

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, toggle && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            toggle && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {currentRoute?.name}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => {
            resetToken();
            window.location.reload();
          }}
        >
          <Badge color="secondary">
            <ExitToAppIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
