import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import SignInModal from "../components/SignInModal";
import Carousel from "../components/Carousel";
import GridItem1 from "../components/GridItem1";
import data from "../MockData";
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
    header: {
        margin: "32px 10px 0",
        display: "flex",
        alignItems: "flex-end",
        borderBottom: " 0.5px solid rgba(0,0,0,0.15)",
    },
}));

const BrowsePage = () => {
    const classes = useStyles();
    const screenSize = useMediaQuery("(min-width:600px)");

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
            <div>
                <Carousel
                    itemList={data}
                    itemView={GridItem1}
                    cols={screenSize ? 5 : 2.5}
                />
            </div>
            <Footer />
            <SignInModal />
        </div>
    );
};

export default BrowsePage;
