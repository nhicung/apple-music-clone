import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Footer from "../components/Footer";
import GridList from "../components/GridList";
import GridItem3 from "../components/GridItem3";
import { getCategories } from "../utils/spotify";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchBar from "../components/SearchBar";

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
        margin: "32px 10px 5px 0",
        display: "flex",
        alignItems: "flex-end",
    },
}));

const Categories = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const screenSize = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        getCategories().then((res) => setCategories(res));
    }, []);

    console.log(categories);
    return (
        <div className={classes.root}>
            <Box sx={{ padding: { xs: "5px 20px", sm: "10px 40px" } }}>
                {screenSize || <SearchBar />}
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
                        col={screenSize ? 3 : 2}
                        titlePosition="layOnTop"
                    />
                </div>
            </Box>
            <Footer />
        </div>
    );
};

export default Categories;
