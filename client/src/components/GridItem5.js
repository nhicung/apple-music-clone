import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography, IconButton } from "@mui/material/";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const useStyles = makeStyles(() => ({
    gridItem: {
        listStyle: "none",
        height: "auto",
        display: "inline-block",
        margin: "5px 15px",
        "&:hover": {
            cursor: "pointer",
            "& $playButton": {
                transform: "translate3d(0,0,50px)",
                opacity: 1,
                background: "transparent",
            },
        },
    },
    gridSingleItem: {
        flexGrow: "0 !important",
    },
    pic: {
        height: "auto",
        borderRadius: 6,
    },
    description: {
        padding: "10px",
        color: "#000",
    },
    playButton: {
        position: "absolute !important",
        opacity: "0",
        top: "14px",
        transition: "0.3s !important",
        left: "14px",
        fontSize: 60,
        zIndex: 5,
    },
}));

export const GridItem = ({ item: { name, type, images, href }, col }) => {
    const styles = useStyles();
    return (
        <Grid xs={12 / col} item direction="column" className={styles.gridItem}>
            <Link href={href} style={{ textDecoration: "none" }}>
                <Grid container>
                    <Grid
                        item
                        xs
                        sx={{
                            maxWidth: "fit-content",
                            position: "relative",
                        }}
                        className={styles.gridSingleItem}
                    >
                        <img
                            href={href}
                            src={images?.[0].url}
                            alt={name}
                            width={97}
                            height={97}
                            className={styles.pic}
                        />
                        <IconButton
                            href={href}
                            target="blank"
                            className={styles.playButton}
                            size="small"
                        >
                            <PlayCircleIcon
                                sx={{
                                    fontSize: 60,
                                    zIndex: 5,
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: "secondary.main",
                                        filter: "contrast(100%)",
                                    },
                                }}
                            />
                        </IconButton>
                    </Grid>
                    <Grid
                        item
                        xs
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div className={styles.description}>
                            <Typography
                                sx={{
                                    fontSize: 15,
                                    fontWeight: 400,
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 300,
                                    color: "subtitle.main",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {type}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Link>
        </Grid>
    );
};

GridItem.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    href: PropTypes.string,
    col: PropTypes.number.isRequired,
};

export default GridItem;
