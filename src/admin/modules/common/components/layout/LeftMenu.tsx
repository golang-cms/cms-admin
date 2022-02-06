import {
  BookOnlineSharp,
  CoPresentSharp,
  KeyboardArrowDown,
  MeetingRoomSharp,
  SnippetFolderSharp,
  WysiwygSharp,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import PagesIcon from "@mui/icons-material/Pages";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import React, { ReactElement, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { drawerWidth } from "../../../Main";
import { AdminBasePath } from "../../../Routes";
import { ToggleContext } from "../../providers/ToggleProvider";

const menuLists = [
  {
    name: "Dashboard",
    link: AdminBasePath,
    icon: <DashboardIcon />,
  },
  {
    groupName: "CMS",
    groupDetails: "Content Management System",
    groupIcon: <WysiwygSharp />,
    listItems: [
      {
        name: "Post",
        link: AdminBasePath + "/posts",
        icon: <PagesIcon />,
      },
      {
        name: "Group Posts",
        link: AdminBasePath + "/groups",
        icon: <SnippetFolderSharp />,
      },
    ],
  },
  {
    groupName: "RMS",
    groupDetails: "Reservation Management System",
    groupIcon: <BookOnlineSharp />,
    listItems: [
      {
        name: "Reservation",
        link: AdminBasePath + "/reservations",
        icon: <EventIcon />,
      },
      {
        name: "Resource",
        link: AdminBasePath + "/resources",
        icon: <MeetingRoomSharp />,
      },
      {
        name: "Client",
        link: AdminBasePath + "/clients",
        icon: <CoPresentSharp />,
      },
    ],
  },
] as MenuList[];

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const LeftMenu = () => {
  // const classes = useStyles();

  const [toggle, setToggle] = useContext(ToggleContext);
  const handleDrawerClose = () => {
    setToggle(false);
  };

  return (
    <Drawer variant="permanent" open={toggle}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <MenuListItems />
      <Divider />
      <List></List>
    </Drawer>
  );
};

const MenuListItems = () => {
  return (
    <List>
      {menuLists
        .map((item: MenuList) => addKeyToItem(item))
        .map((item: MenuList) =>
          isSingleListItem(item) ? (
            <SingleListItem {...item} />
          ) : (
            <GroupListItem {...item} />
          )
        )}
    </List>
  );
};

const addKeyToItem = (item: MenuList): MenuList =>
  isSingleListItem(item)
    ? { ...item, key: item.name }
    : { ...item, key: item.groupName };

const isSingleListItem = (list: MenuList): list is SingleListItemProps =>
  (list as GroupListItemProps).listItems === undefined;
interface GroupListItemProps {
  groupName: string;
  groupDetails: string;
  groupIcon?: ReactElement;
  listItems: SingleListItemProps[];
  key?: string;
}

interface SingleListItemProps {
  name: string;
  link: string;
  icon: ReactElement;
  key?: string;
}
type MenuList = SingleListItemProps | GroupListItemProps;

const GroupListItem = (props: GroupListItemProps) => {
  const { groupName, groupDetails, groupIcon, listItems } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          px: 3,
          pt: 2.5,
          pl: "14px",
          pb: open ? 0 : 2.5,
          color: "primary",
          "&:hover, &:focus": {
            "& .keyboardArrowDown": { opacity: open ? 1 : 0 },
          },
        }}
      >
        <ListItemIcon
          sx={{
            color: "inherit",
            minWidth: "56px",
            mt: 0,
            "& svg": {
              fontSize: 32,
            },
          }}
        >
          {groupIcon}
        </ListItemIcon>
        <ListItemText
          primary={groupName}
          primaryTypographyProps={{
            fontSize: 18,
            fontWeight: "bold",
            lineHeight: "20px",
            mb: "2px",
          }}
          secondary={groupDetails}
          secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: "16px",
            color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
          }}
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          className="keyboardArrowDown"
          sx={{
            mr: -1,
            opacity: 0,
            transform: open ? "rotate(-180deg)" : "rotate(0)",
            transition: "0.2s",
          }}
        />
      </ListItemButton>
      {open &&
        listItems
          .map(
            (item: SingleListItemProps) =>
              addKeyToItem(item) as SingleListItemProps
          )
          .map((item: SingleListItemProps) => <SingleListItem {...item} />)}
    </>
  );
};

const SingleListItem = (props: SingleListItemProps) => {
  const { name, link, icon } = props;
  return (
    <ListItem key={name} button component={Link} to={link}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};
export default LeftMenu;

/*
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
*/
