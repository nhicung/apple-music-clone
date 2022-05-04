import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import GridList from "../components/GridList";
import Carousel from "../components/Carousel";
import GridItem5 from "../components/GridItem5";
import GridItem6 from "../components/GridItem6";
import { getFeaturedPlaylists, getNewRealeases } from "../utils/spotify";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "100%",
        maxWidth: "1680px",
        margin: "0 auto",
        flexGrow: 1,
        top: "55px",
    },
    header: {},
}));

const RadioPage = () => {
    const classes = useStyles();
    const [playlist, setPlaylist] = useState([]);
    const [newReleases, setNewReleases] = useState([]);
    const [newReleases2, setNewReleases2] = useState([]);

    const screenSize = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        getFeaturedPlaylists(9).then((res) => setPlaylist(res));
        getNewRealeases(60).then((res) => setNewReleases(res));
        getNewRealeases(80).then((res) => setNewReleases2(res));
    }, []);

    return (
        <div className={classes.root}>
            <Box
                sx={{
                    margin: { xs: "32px 10px 0", sm: "32px 30px 0" },
                    display: "flex",
                    alignItems: "flex-end",
                    borderBottom: " 0.5px solid rgba(0,0,0,0.15)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "34px",
                        lineHeight: 1.17649,
                        fontWeight: 700,
                        letterSpacing: 0,
                        mb: "6px",
                    }}
                >
                    Radio
                </Typography>
            </Box>
            <Box sx={{ padding: { xs: "10px 0", sm: "20px 5px" } }}>
                <Box
                    sx={{
                        padding: {
                            xs: "0 15px 30px 25px",
                            sm: "0 25px 30px 35px",
                        },
                        borderBottom: "0.5px solid rgba(0,0,0,0.15)",
                    }}
                >
                    <GridList
                        itemList={playlist}
                        itemView={GridItem6}
                        col={screenSize ? 3 : 1}
                    />
                </Box>
                <Carousel
                    itemList={newReleases}
                    seeAll={true}
                    cols={screenSize ? 3 : 1.5}
                    itemView={GridItem5}
                    header="Local Broadcasters"
                    top="50%"
                    rows={1}
                />
                <Carousel
                    itemList={newReleases2}
                    seeAll={true}
                    cols={screenSize ? 3 : 1.5}
                    itemView={GridItem5}
                    header="International Broadcasters"
                    top="50%"
                    rows={1}
                />
            </Box>
            <Footer />
        </div>
    );
};

export default RadioPage;
