import * as React from "react";
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    Typography,
    Modal,
    Box,
} from "@mui/material/";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
    {
        id: 0,
        link: "",
        title: "Help",
        icon: <HelpOutlineIcon sx={{ fontSize: "20px" }} />,
        color: "primary.main",
    },
    {
        id: 1,
        link: "",
        title: "Settings",
        icon: <SettingsIcon sx={{ fontSize: "20px" }} />,
        color: "primary.main",
    },
    {
        id: 2,
        link: "",
        title: "Sign Out",
        color: "secondary.main",
    },
];

export default function ProfileMenu({ open, onClose }) {
    const handleClose = () => {
        onClose();
    };
    return (
        <Modal
            sx={{
                left: 0,
                top: "47.5px",
                right: "20px",
                height: "96px",
                display: open ? "flex" : "none",
                position: "absolute",
                justifyContent: " flex-end",
                "& .MuiBackdrop-root": {
                    position: "absolute",
                    borderRadius: "6px",
                    textAlign: "start",
                    height: "100vh",
                    width: "100vw",
                    opacity: { sm: "0 !important" },
                },
            }}
            open={open}
            onClose={handleClose}
        >
            <Box
                sx={{
                    minWidth: "185px",
                    maxWidth: "350px",
                }}
            >
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                        pt: 0,
                        pb: 0,
                        border: "0.5px solid rgba(0,0,0,.2)",
                        borderRadius: "6px",
                    }}
                >
                    {menuItems.map((menu) => (
                        <ListItem
                            key={menu.id}
                            sx={{ height: "32px" }}
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {menu.icon}
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            lineHeight: 1.23077,
                                            fontWeight: 400,
                                            letterSpacing: 0,
                                            color: menu.color,
                                        }}
                                    >
                                        {menu.title}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Modal>
    );
}
