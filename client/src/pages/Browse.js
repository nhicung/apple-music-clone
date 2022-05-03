import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import SignInModal from "../components/SignInModal";
import Carousel from "../components/Carousel";
import GridItem1 from "../components/GridItem1";
import GridItem2 from "../components/GridItem2";
import GridItem4 from "../components/GridItem4";
import GridList from "../components/GridList";
import useMediaQuery from "@mui/material/useMediaQuery";
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
        padding: "0 15px",
    },
    header: {
        margin: "32px 10px 0",
        display: "flex",
        alignItems: "flex-end",
        borderBottom: " 0.5px solid rgba(0,0,0,0.15)",
        marginLeft: "20px",
    },
}));

const BrowsePage = () => {
    const classes = useStyles();
    const screenSize = useMediaQuery("(min-width:600px)");
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
        getCategories(7).then((res) => setCategories(res));
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
            <Box className={classes.header}>
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
            </Box>
            <Box sx={{ paddingBottom: "48px" }}>
                <Carousel
                    itemList={playlist}
                    cols={screenSize ? 2 : 1.5}
                    itemView={GridItem2}
                    top="60%"
                    rows={1}
                />
                <Carousel
                    itemList={albums}
                    seeAll={true}
                    cols={screenSize ? 5 : 2.5}
                    itemView={GridItem1}
                    header="You Gotta Hear"
                    top="40%"
                    rows={1}
                />
                <Carousel
                    cols={screenSize ? 5 : 2.5}
                    seeAll={true}
                    itemList={albums2}
                    itemView={GridItem1}
                    header="Now in Spatial Audio"
                    top="40%"
                    rows={1}
                />
                <Carousel
                    cols={screenSize ? 5 : 2.5}
                    seeAll={true}
                    itemList={albums3}
                    itemView={GridItem1}
                    header="New Music"
                    top="40%"
                    rows={1}
                />
                <Box>
                    <Typography
                        sx={{
                            fontSize: "17px",
                            lineHeight: 1.17649,
                            fontWeight: 700,
                            letterSpacing: 0,
                            mb: "6px",
                            width: "100%",
                            padding: "10px 0 12px 25px",
                        }}
                    >
                        More to Explore
                    </Typography>
                    <GridList
                        itemList={categories}
                        itemView={GridItem4}
                        col={screenSize ? 3 : 1}
                    />
                </Box>
            </Box>
            <Footer />
            {/* <SignInModal /> */}
        </div>
    );
};

export default BrowsePage;
