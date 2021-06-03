import { Divider, Drawer, IconButton, List, makeStyles } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { useContext, useState } from "react";
import { LeftMenuContext, drawerWidth } from "../Main";

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
  // const [open, setOpen] = useState(true);
 
  const [leftMenuOpenContext, setLeftMenuOpenContext] = useContext(LeftMenuContext);
  const handleDrawerClose = () => {
    setLeftMenuOpenContext(false);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !leftMenuOpenContext && classes.drawerPaperClose),
      }}
      open={leftMenuOpenContext}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List></List>
      <Divider />
      <List></List>
    </Drawer>
  );
};

export default LeftMenu;