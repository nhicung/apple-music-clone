import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GridViewIcon from "@mui/icons-material/GridView";
import SensorsIcon from "@mui/icons-material/Sensors";
import AppleMusicLogo from "../images/apple-music.svg";
import SearchBar from "./SearchBar"

const drawerWidth = 240;

const sideBarTitle = [
  {
    id: 0,
    link: "/",
    title: "Listen Now",
    icon: <PlayCircleOutlineIcon />,
  },
  {
    id: 1,
    link: "/",
    title: "Browse",
    icon: <GridViewIcon />,
  },
  {
    id: 2,
    link: "/",
    title: "Radio",
    icon: <SensorsIcon />,
  },
];

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img width={100} src={AppleMusicLogo} />
        </Toolbar>
        <List>
          <SearchBar />
          {sideBarTitle.map((menu) => (
            <ListItem button key={menu.id}>
              <ListItemIcon sx={{ color: "secondary.main" }}>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
