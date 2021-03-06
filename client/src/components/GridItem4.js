import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography, IconButton } from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles(() => ({
    gridItem: {
        width: "100%",
        cursor: "pointer",
        borderRadius: " 15px",
    },
    frame: {
        position: "relative",
        borderRadius: 6,
        transition: " 0.2s ease-in",
        "&:hover": {
            cursor: "pointer",
            filter: "brightness(0.75)",
        },
    },
    pic: {
        height: "auto",
        maxWidth: "100%",
        borderRadius: 6,
        transition: " .1s ease-in",
    },
    description: {
        width: "100%",
        height: "58px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        borderRadius: "15px",
        background: "rgba(0, 0, 0, 0.05)",
        padding: "0 16px",
        justifyContent: "space-between",
    },
    title: {
        display: "flex",
        justifyContent: "flex-start",
        color: "#d60017",
    },
}));

export const GridItem = ({ item: { name, href }, col }) => {
    const styles = useStyles();
    return (
        <Grid
            xs={12 / col}
            item
            direction="column"
            align="center"
            className={styles.gridItem}
        >
            <Link href={href} style={{ textDecoration: "none" }}>
                <div className={styles.description}>
                    <Typography
                        className={styles.title}
                        sx={{ fontSize: 13, fontWeight: 400 }}
                    >
                        {name}
                    </Typography>
                    <IconButton
                        sx={{ fontSize: "14px", color: "secondary.main" }}
                    >
                        <ArrowForwardIosIcon
                            sx={{ fontSize: "14px", color: "secondary.main" }}
                        />
                    </IconButton>
                </div>
            </Link>
        </Grid>
    );
};

GridItem.propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    col: PropTypes.number.isRequired,
};

export default GridItem;
