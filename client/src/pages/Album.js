import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import PlaylistHeader from "../components/PlaylistHeader";
import SongList from "../components/SongList";
import { getPlaylist, getAlbum } from "../utils/spotify";
import { useParams } from "react-router-dom";

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
    // const [playlist, setPlaylist] = useState([]);
    const [header, setHeader] = useState([]);
    const [album, setAlbum] = useState([]);

    const params = useParams();

    useEffect(() => {
        getAlbum(params.id).then((res) => setAlbum(res.tracks.items));
        getAlbum(params.id).then((res) => setHeader(res));
    }, []);

    return (
        <div className={classes.root}>
            <PlaylistHeader item={header} />
            <SongList songList={album} />
            <Footer />
        </div>
    );
};

export default PlayList;
