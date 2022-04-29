import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import PlaylistHeader from "../components/PlaylistHeader";
import SongList from "../components/SongList";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "100%",
        maxWidth: "1680px",
        margin: "0 auto",
        flexGrow: 1,
        top: "75px",
        padding: "20px",
    },
    header: {
        margin: "32px 10px 0",
        display: "flex",
        alignItems: "flex-end",
        borderBottom: " 0.5px solid rgba(0,0,0,0.15)",
    },
}));

const playlistHeader = {
    image: "https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/2a/85/e3/2a85e3b4-5503-29fa-ca4d-f6afd9a98f1c/Job14d62ca2-3fc9-4292-a4f8-54dbb0859c94-108238143-PreviewImage_PreviewImageIntermediate_preview_image_nonvideo-Time1607894324638.png/540x540cc.webp",
    imageLayer:
        "https://is3-ssl.mzstatic.com/image/thumb/Features114/v4/24/12/9b/24129b24-6f0e-6c28-22d2-cbc248cc0a32/U0RTLU1TLVdXLUFsaXN0UG9wLUFEQU1fSUQ9MTAwNDc3NjIwMi5wbmc.png/44x44br-60.jpg",
    title: "A-List Pop",
    category: "Apple Music Pop",
    subtitle: "updated yesterday",
    description:
        "“I think the song really shows off my honesty but also my energy,” Shawn Mendes tells Apple Music of “When You're Gone,” the new single that headlines A-List Pop this week. Originally written as a ballad on piano, it’s now a guitar-driven anthem, the Canadian singer-songwriter belting his way through a picture of love lost too soon. “Playing live shows is what I live for,” he says, “and this song was born to be played onstage.” Add A-List Pop to your library to stay up on the latest and greatest pop music.",
};

const BrowsePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <div
                style={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: `${drawerWidth}px`,
                    padding: "40px",
                }}
            > */}
            <PlaylistHeader item={playlistHeader} />
            <SongList />
            {/* </div> */}
            <Footer />
        </div>
    );
};

export default BrowsePage;
