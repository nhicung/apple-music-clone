import * as React from "react";
import { Box, CssBaseline } from "@mui/material/";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import ProfileMenu from "./ProfileMenu";

const drawerWidth = 260;

const Navigation = ({ handleOpen }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <TopNav handleOpen={handleOpen} />
            <SideBar handleOpen={handleOpen} />
        </Box>
    );
};

export default Navigation;
