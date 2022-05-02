import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography, IconButton } from "@mui/material/";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const useStyles = makeStyles(() => ({
    gridItem: {
        listStyle: "none",
        height: "auto",
        display: "inline-block",
        padding: 10,
    },
    frame: {
        display: "inline-block",
        position: "relative",
        zIndex: 100,
        "&:hover": {
            cursor: "pointer",
            "& $buttonGroup": {
                transform: "translate3d(0,0,50px)",
                opacity: 1,
            },
        },
    },
    pic: {
        height: "auto",
        maxWidth: "100%",
        borderRadius: 6,
    },
    description: {
        paddingTop: 10,
        paddingBottom: 10,
        color: "#fffff",
    },
    title: {
        display: "flex",
        justifyContent: "flex-start",
    },
    buttonGroup: {
        position: "absolute !important",
        color: "grey !important",
        opacity: 0,
        bottom: "3%",
        transition: "0.3s !important",
        zIndex: 100,
    },
    playButton: {
        left: "3%",
        fontSize: 35,
        zIndex: 5,
    },
    moreButton: {
        right: "3%",
        fontSize: 35,
    },
}));

export const GridItem = ({ item: { name, type, images, href }, col }) => {
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
                <div className={styles.frame}>
                    <img
                        href={href}
                        src={images?.[0].url}
                        alt={name}
                        className={styles.pic}
                    />
                    <IconButton
                        href={href}
                        target="blank"
                        className={cx(styles.buttonGroup, styles.playButton)}
                        size="small"
                    >
                        <PlayCircleIcon
                            sx={{
                                fontSize: 35,
                                zIndex: 5,
                                "&:hover": {
                                    cursor: "pointer",
                                    color: "secondary.main",
                                },
                            }}
                        />
                    </IconButton>
                    <IconButton
                        href={href}
                        target="blank"
                        className={cx(styles.buttonGroup, styles.moreButton)}
                        size="small"
                    >
                        <MoreHorizRoundedIcon
                            sx={{
                                fontSize: 35,
                                zIndex: 5,
                                "&:hover": {
                                    cursor: "pointer",
                                    color: "secondary.main",
                                },
                            }}
                        />
                    </IconButton>
                </div>
                <div className={styles.description}>
                    <Typography
                        className={styles.title}
                        sx={{ fontSize: 12, fontWeight: 400 }}
                    >
                        {name.length > 30 ? name.substr(0, 30) + "..." : name}
                    </Typography>
                    <Typography
                        className={styles.title}
                        sx={{
                            fontSize: 12,
                            fontWeight: 300,
                            color: "subtitle.main",
                        }}
                    >
                        {type}
                    </Typography>
                </div>
            </Link>
        </Grid>
    );
};

// GridItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     images: PropTypes.array.isRequired,
//     href: PropTypes.string,
//     col: PropTypes.number.isRequired,
// };

export default GridItem;
