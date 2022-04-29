import * as React from "react";
import { Drawer, Toolbar, Typography } from "@mui/material/";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material/";
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
        link: "/listen-now",
        title: "Listen Now",
        icon: <PlayCircleOutlineIcon sx={{ fontSize: "20px" }} />,
    },
    {
        id: 1,
        link: "/browse",
        title: "Browse",
        icon: <GridViewIcon sx={{ fontSize: "20px" }} />,
    },
    {
        id: 2,
        link: "/radio",
        title: "Radio",
        icon: <SensorsIcon sx={{ fontSize: "20px" }} />,
    },
];

export const SideBar = () => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundColor: "sidebar.main",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar variant="dense" sx={{ mt: "4px", minHeight: "48px" }}>
                <img
                    width={85}
                    src={AppleMusicLogo}
                    style={{ marginLeft: "5px" }}
                />
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
                            href={menu.link}
                            component="a"
                        >
                            <ListItemIcon
                                sx={{
                                    color: "secondary.main",
                                    minWidth: "30px",
                                }}
                            >
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        style={{
                                            fontSize: "15px",
                                            lineHeight: 1.28,
                                        }}
                                    >
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
    );
};

export default SideBar;
