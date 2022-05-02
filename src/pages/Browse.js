import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import GridItem1 from "../components/GridItem1";
import GridItem2 from "../components/GridItem2";
import data from "../MockData";
import {
    getNewRealeases,
    getFeaturedPlaylists,
    getCategories,
} from "../utils/spotify";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "100%",
        maxWidth: "1680px",
        margin: "0 auto",
        flexGrow: 1,
        top: "55px",
    },
    header: {
        margin: "32px 10px 0",
        display: "flex",
        alignItems: "flex-end",
        borderBottom: " 0.5px solid rgba(0,0,0,0.15)",
    },
}));

const BrowsePage = () => {
    const classes = useStyles();
    const [albums, setAlbums] = useState([]);
    const [albums2, setAlbums2] = useState([]);
    const [albums3, setAlbums3] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getNewRealeases(0).then((res) => setAlbums(res));
        getNewRealeases(20).then((res) => setAlbums2(res));
        getNewRealeases(40).then((res) => setAlbums3(res));
        getFeaturedPlaylists().then((res) => setPlaylist(res));
        getCategories().then((res) => setCategories(res));
    }, []);

    // useEffect(() => {
    //     for (let val = 0; val < 4; val++) {
    //         getNewRealeases(val * 20).then((res) =>
    //             setAlbums((prev) => {
    //                 const newList = [...prev];
    //                 newList.push(res);
    //                 return newList;
    //             })
    //         );
    //     }
    // }, []);

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography
                    sx={{
                        fontSize: "34px",
                        lineHeight: 1.17649,
                        fontWeight: 700,
                        letterSpacing: 0,
                        mb: "6px",
                    }}
                >
                    Browse
                </Typography>
            </div>
            <Carousel itemList={playlist} cols={2} itemView={GridItem2} />
            <div>
                <Carousel
                    itemList={albums}
                    seeAll={true}
                    cols={5}
                    itemView={GridItem1}
                    header="You Gotta Hear"
                />
            </div>
            <div>
                <Carousel
                    cols={5}
                    seeAll={true}
                    itemList={albums2}
                    itemView={GridItem1}
                    header="Now in Spatial Audio"
                />
            </div>
            <div>
                <Carousel
                    cols={5}
                    seeAll={true}
                    itemList={albums3}
                    itemView={GridItem1}
                    header="New Music"
                />
            </div>
            <Footer />
        </div>
    );
};

export default BrowsePage;
