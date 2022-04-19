import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography, IconButton, Box } from "@mui/material/";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppleIcon from "@mui/icons-material/Apple";

const useStyles = makeStyles(() => ({
    gridItem: {
        listStyle: "none",
        height: "auto",
        display: "inline-block",
        padding: "0px 15px",
    },
    frame: {
        display: "inline-block",
        position: "relative",
        borderRadius: 6,
    },
    pic: {
        height: "auto",
        maxWidth: "100%",
        borderRadius: 8,
        transition: " .1s ease-in",
    },
    // title: {
    //     display: "flex",
    //     justifyContent: "flex-start",
    //     fontSize: 14,
    //     fontWeight: 300,
    //     color: "white",
    //     paddingLeft: 10,
    // },
    // textGroup: {
    //     left: 0,
    //     right: 0,
    //     minHeight: "100px",
    //     transition: "0.3s",
    //     alignItems: "flex-end",
    //     whiteSpace: "normal",
    //     // justifyContent: "space-between",
    //     display: "block",
    //     position: "absolute",
    //     top: 0,
    //     bottom: 0,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center bottom",
    // },
    wrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 8,
        transition: " 0.2s ease-in",
        "&:hover": {
            cursor: "pointer",
            filter: "brightness(0.85)",
            "& $playButton": {
                transform: "translate3d(0,0,50px)",
                opacity: 1,
            },
        },
    },
    playButton: {
        backdropFilter: "blur(5px)",
        fontSize: 30,
        right: "12px",
        left: "auto",
        position: "absolute",
        bottom: "20px",
        top: "auto",
        opacity: 0,
    },
}));

export const GridItem = ({
    item: {
        media,
        title,
        subtitle,
        url,
        schedule,
        event,
        description,
        background,
    },
}) => {
    const styles = useStyles();
    return (
        <Grid item direction="column" className={styles.gridItem}>
            <div
                style={{
                    display: "flex",
                    // flexDirection: "column",
                    justifyContent: "space-between",
                    lineHeight: 1.5,
                    marginBottom: "13px",
                }}
            >
                <div>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "black",
                            fontSize: "17px",
                            fontWeight: 700,
                            lineHeight: 1.29412,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <AppleIcon sx={{ fontSize: "16px" }} />
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "15px",
                            color: "lighter.main",
                        }}
                    >
                        {subtitle}
                    </Typography>
                </div>
                <IconButton>
                    <CalendarMonthIcon sx={{ color: "secondary.main" }} />
                </IconButton>
            </div>

            <Link href={url} style={{ textDecoration: "none" }}>
                <div
                    className={styles.wrapper}
                    style={{
                        backgroundImage: `url(${background})`,
                    }}
                >
                    <div className={styles.frame}>
                        <img
                            href={url}
                            src={media}
                            alt={subtitle}
                            className={styles.pic}
                        />
                    </div>
                    {/* <Box
                        sx={{
                            opacity: 1,
                            background:
                                "linear-gradient(transparent 0,rgba(0,0,0,.4))",
                            height: 300,
                            width: "100%",
                            position: "absolute",
                            bottom: ".5%",
                            left: 0,
                            right: 0,
                        }}
                    > */}
                    <div
                        href={url}
                        target="blank"
                        style={{
                            // position: "absolute",
                            width: "100%",
                            backgroundImage: `url(${background})`,
                            padding: "14px 12px 16px 12px",
                            backgroundSize: "cover",
                            backgroundPosition: " center bottom",
                            borderRadius: 8,
                        }}
                    >
                        <div
                            className={styles.textGroup}
                            style={{
                                color: "rgba(255,255,255,.8)",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "11px",
                                    lineHeight: 1.27273,
                                    fontWeight: 600,
                                    letterSpacing: 0,
                                }}
                            >
                                {schedule}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    lineHeight: 1.33338,
                                    fontWeight: 600,
                                    letterSpacing: 0,
                                    marginTop: "2px",
                                    marginBottom: " 1px",
                                }}
                            >
                                {event}
                            </Typography>
                            <Typography
                                sx={{ fontSize: "12px", lineHeight: 1.25 }}
                            >
                                {description}
                            </Typography>
                        </div>
                    </div>
                    <IconButton size="small" className={styles.playButton}>
                        <PlayCircleIcon
                            sx={{
                                fontSize: 30,
                                zIndex: 5,
                                "&:hover": {
                                    cursor: "pointer",
                                    color: "secondary.main",
                                    opacity: 1,
                                },
                            }}
                        />
                    </IconButton>
                </div>
            </Link>
        </Grid>
    );
};

GridItem.propTypes = {
    title: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    url: PropTypes.string,
    subttile: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    schedule: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
};

export default GridItem;
