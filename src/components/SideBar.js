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
import AppleMusicCircle from "../images/apple-music-circle.png";
import SearchBar from "./SearchBar";
import CallMadeIcon from "@mui/icons-material/CallMade";

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

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex", color: "sidebar.main" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          height: "55px",
        }}
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
        <Toolbar variant="dense" sx={{ marginTop: "4px", minHeight: "48px" }}>
          <img width={85} src={AppleMusicLogo} style={{ marginLeft: "5px" }} />
        </Toolbar>
        <SearchBar />
        <div style={{ padding: "8px 25px" }}>
          <List>
            {sideBarTitle.map((menu) => (
              <ListItem
                button
                key={menu.id}
                sx={{
                  margin: "0 0 2px",
                  padding: "4px",
                  borderRadius: "6px",
                  height: "32px",
                }}
              >
                <ListItemIcon
                  sx={{ color: "secondary.main", minWidth: "30px" }}
                >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography style={{ fontSize: "15px", lineHeight: 1.28 }}>
                      {menu.title}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div style={{ width: "100%", position: "absolute", bottom: "0px" }}>
          <Typography
            sx={{
              width: "80%",
              height: 50,
              justifyContent: "flex-start",
              display: "center",
              margin: "0 auto",
              padding: "5px",
              fontSize: "13px",
              borderTop: "0.5px solid rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              color: "lighter.main",
            }}
          >
            <img
              width={24}
              src={AppleMusicCircle}
              style={{ marginLeft: "4px", marginRight: "7px" }}
            />
            Open in Music
            <CallMadeIcon fontSize="13px" sx={{ marginLeft: "4px" }} />
          </Typography>
        </div>
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
