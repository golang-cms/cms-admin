import { Divider, Drawer, IconButton, makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PagesIcon from '@material-ui/icons/Pages';
import clsx from 'clsx';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { drawerWidth } from "../../Main";
import { AdminBasePath } from "../../Routes";
import { ToggleContext } from "../providers/ToggleProvider";

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));


const LeftMenu = () => {
  const classes = useStyles();
 
  const [toggle, setToggle] = useContext(ToggleContext);
  const handleDrawerClose = () => {
    setToggle(false);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !toggle && classes.drawerPaperClose),
      }}
      open={toggle}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List></List>
    </Drawer>
  );
};

const mainListItems = (
    <div>
      <ListItem button component={Link} to={AdminBasePath}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to={AdminBasePath + "/post"} >
        <ListItemIcon>
          <PagesIcon />
        </ListItemIcon>
        <ListItemText primary="Post" />
      </ListItem>
    </div>
);
export default LeftMenu;