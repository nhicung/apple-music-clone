import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import GridList from "../components/GridList";
import GridItem3 from "../components/GridItem3";
import data from "../MockData";
import { getCategories } from "../utils/spotify";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "100%",
        maxWidth: "1680px",
        margin: "0 auto",
        flexGrow: 1,
        top: "55px",
        padding: "10px 20px",
    },
    header: {
        margin: "32px 10px 5px",
        display: "flex",
        alignItems: "flex-end",
        borderBottom: " 0.5px solid rgba(0,0,0,0.15)",
    },
}));

const BrowsePage = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((res) => setCategories(res));
    }, []);

    console.log(categories);
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography
                    sx={{
                        fontSize: "17px",
                        lineHeight: 1.17649,
                        fontWeight: 700,
                        letterSpacing: 0,
                        mb: "6px",
                        width: "100%",
                    }}
                >
                    Browse Categories
                </Typography>
            </div>
            <div>
                <GridList
                    itemList={categories}
                    itemView={GridItem3}
                    col={3}
                    titlePosition="layOnTop"
                />
            </div>

            <Footer />
        </div>
    );
};

export default BrowsePage;
