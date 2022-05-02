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
        margin: "0 15px",
        "&:hover": {
            cursor: "pointer",
            "& $playButton": {
                transform: "translate3d(0,0,50px)",
                opacity: 1,
                background: "transparent",
            },
        },
    },
    pic: {
        height: "auto",
        maxWidth: "100%",
        borderRadius: 6,
    },
    description: {
        padding: "10px 27px 10px 20px",
        color: "#fffff",
    },
    playButton: {
        position: "absolute !important",
        opacity: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transition: "0.3s !important",
        left: "3%",
        fontSize: 60,
        zIndex: 5,
    },
}));

export const GridItem = ({ item: { title, subtitle, media, url } }) => {
    const styles = useStyles();
    return (
        <Grid item direction="column" className={styles.gridItem}>
            <Link href={url} style={{ textDecoration: "none" }}>
                <Grid container>
                    <Grid
                        item
                        xs
                        sx={{ maxWidth: "fit-content", position: "relative" }}
                    >
                        <img
                            href={url}
                            src={media}
                            alt={title}
                            width={97}
                            height={97}
                            className={styles.pic}
                        />
                        <IconButton
                            href={url}
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
                        xs={9}
                        sx={{ display: "flex", alignItems: "center" }}
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
                                {title}
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
                                {subtitle}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Link>
        </Grid>
    );
};

GridItem.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    url: PropTypes.string,
};

export default GridItem;
