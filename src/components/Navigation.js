import * as React from "react";
import { Box, CssBaseline } from "@mui/material/";
import SideBar from "./SideBar";
import TopNav from "./TopNav";

const drawerWidth = 260;

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
