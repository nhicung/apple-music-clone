import * as React from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material/";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material/";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GridViewIcon from "@mui/icons-material/GridView";
import SensorsIcon from "@mui/icons-material/Sensors";
import AppleMusicLogo from "../images/apple-music.svg";
import AppleMusicCircle from "../images/apple-music-circle.png";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SideBar from "./SideBar";
import TopNav from "./TopNav";

const drawerWidth = 260;

const sideBarTitle = [
  {
    id: 0,
    link: "/",
    title: "Listen Now",
    icon: <PlayCircleOutlineIcon sx={{ fontSize: "20px" }} />,
  },
  {
    id: 1,
    link: "/",
    title: "Browse",
    icon: <GridViewIcon sx={{ fontSize: "20px" }} />,
  },
  {
    id: 2,
    link: "/",
    title: "Radio",
    icon: <SensorsIcon sx={{ fontSize: "20px" }} />,
  },
];

export const Navigation = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNav />
      <SideBar />
    </Box>
  );
};

export default Navigation;
