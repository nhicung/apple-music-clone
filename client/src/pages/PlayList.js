import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import PlaylistHeader from "../components/PlaylistHeader";
import SongList from "../components/SongList";
import { getPlaylist } from "../utils/spotify";

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

const PlayList = () => {
    const classes = useStyles();
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        getPlaylist("37i9dQZF1DXcBWIGoYBM5M").then((res) => setPlaylist(res));
    }, []);

    return (
        <div className={classes.root}>
            <PlaylistHeader item={playlist} />
            <SongList />
            <Footer />
        </div>
    );
};

export default PlayList;
