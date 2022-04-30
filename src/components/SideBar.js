import React, { useState } from "react";
import {
    Drawer,
    Toolbar,
    Typography,
    Box,
    Grid,
    IconButton,
} from "@mui/material/";
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material/";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GridViewIcon from "@mui/icons-material/GridView";
import SensorsIcon from "@mui/icons-material/Sensors";
import AppleMusicLogo from "../images/apple-music.svg";
import AppleMusicCircle from "../images/apple-music-circle.png";
import SearchBar from "./SearchBar";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

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
    {
        id: 3,
        title: "Search",
        icon: <SearchIcon sx={{ fontSize: "20px" }} />,
        display: { sx: "block", sm: "none" },
    },
];

export const SideBar = ({ handleOpen }) => {
    const [open, setOpen] = useState(false);

    // const [selectedIndex, setSelectedIndex] = React.useState();

    // const handleListItemClick = (event, index) => {
    //     setSelectedIndex(index);
    // };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            sx={{
                width: { xs: "100vw", sm: drawerWidth },
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: { xs: "100vw", sm: drawerWidth },
                    boxSizing: { sm: "border-box" },
                    backgroundColor: { sm: "sidebar.main" },
                    height: { xs: open ? "100vh" : "44px", sm: "100vh" },
                    boxShadow: { xs: "0 1px 2px rgb(0 0 0 / 10%)" },
                    transition: "all .5s ease-in-out",
                    transformOrigin: "left top",
                },
                display: "inherit",
                position: { xs: "fixed" },
                overflow: { xs: "hidden" },
                zIndex: { xs: 9901 },
                padding: { xs: 0 },
                top: { xs: 0 },
                flexDirection: { xs: "column" },
                backgroundColor: { xs: "white" },
                gridArea: { xs: "sidebar" },
            }}
            variant="permanent"
            anchor="left"
        >
            <Grid
                container
                sx={{
                    alignItems: "center",
                    display: { xs: "flex", sm: "none" },
                }}
            >
                <Grid
                    item
                    xs
                    sx={{
                        display: { xs: "flex", md: "none" },
                        alignItems: "center",
                        justifyContent: "flex-start",
                        color: "black",
                        pl: "20px",
                    }}
                >
                    <IconButton
                        color="secondary"
                        sx={{
                            fontSize: {
                                xs: "36px",
                                md: "26px",
                            },
                            display: "flex",
                            alignItems: "center",
                        }}
                        onClick={toggleDrawer}
                    >
                        {open ? (
                            <CloseIcon
                                sx={{
                                    fontSize: {
                                        xs: "34px",
                                        md: "26px",
                                        transition: "all .5s ease-in-out",
                                    },
                                }}
                            />
                        ) : (
                            <DragHandleIcon
                                sx={{
                                    fontSize: {
                                        xs: "34px",
                                        md: "26px",
                                    },
                                }}
                            />
                        )}
                    </IconButton>
                </Grid>
                <Grid
                    item
                    xs
                    sx={{
                        display: { xs: "flex", sm: "none" },
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        width={65}
                        src={AppleMusicLogo}
                        style={{ marginLeft: "5px" }}
                    />
                </Grid>
                <Grid
                    item
                    xs
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        pr: "20px",
                    }}
                >
                    <IconButton
                        color="secondary"
                        onClick={handleOpen}
                        sx={{
                            fontSize: {
                                xs: "36px",
                                md: "26px",
                            },
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <AccountCircleIcon
                            sx={{
                                fontSize: {
                                    xs: "34px",
                                    md: "26px",
                                },
                            }}
                        />
                    </IconButton>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: { xs: open ? "inline" : "none", sm: "inline" },
                }}
            >
                <Toolbar
                    variant="dense"
                    sx={{
                        mt: "4px",
                        minHeight: "48px",
                        display: { xs: "none", sm: "flex" },
                    }}
                >
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
                            <ListItemButton
                                // selected={selectedIndex === menu.id}
                                // onClick={(event) =>
                                //     handleListItemClick(event, menu.id)
                                // }
                                key={menu.id}
                                sx={{
                                    margin: "0 0 2px",
                                    padding: "4px",
                                    borderRadius: "6px",
                                    height: { xs: "42px", sm: "32px" },
                                    display: menu.display,
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
                                            sx={{
                                                fontSize: {
                                                    xs: "17px",
                                                    sm: "15px",
                                                },
                                                lineHeight: 1.28,
                                            }}
                                        >
                                            {menu.title}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </div>
                <Box
                    sx={{
                        width: "100%",
                        position: "absolute",
                        bottom: { xs: "auto", sm: "0px" },
                    }}
                >
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
                        <CallMadeIcon
                            fontSize="13px"
                            sx={{ marginLeft: "4px" }}
                        />
                    </Typography>
                </Box>
            </Box>
        </Drawer>
    );
};

export default SideBar;
