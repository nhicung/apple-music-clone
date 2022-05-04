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
    frame: {},
    pic: {
        height: "auto",
        maxWidth: "100%",
        borderRadius: 8,
        transition: " .1s ease-in",
    },
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
    item: { href, images, name, description, id },
    col,
}) => {
    const styles = useStyles();
    return (
        <Grid xs={12 / col} item direction="column" className={styles.gridItem}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    lineHeight: 1.5,
                    marginBottom: "13px",
                }}
            >
                <div>
                    <Typography
                        sx={{
                            color: "black",
                            fontSize: "17px",
                            fontWeight: 700,
                            lineHeight: 1.29412,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <AppleIcon sx={{ fontSize: "16px" }} />
                        Music Hits
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "15px",
                            color: "lighter.main",
                        }}
                    >
                        The new music that matters.
                    </Typography>
                </div>
                <IconButton>
                    <CalendarMonthIcon sx={{ color: "secondary.main" }} />
                </IconButton>
            </div>

            <Link href={`playlist/${id}`} style={{ textDecoration: "none" }}>
                <div
                    className={styles.wrapper}
                    style={{
                        backgroundColor: "#641824",
                    }}
                >
                    <Box
                        sx={{
                            display: "inline-block",
                            position: "relative",
                            borderRadius: 2,
                            backgroundImage: `url(${images[0].url})`,
                            height: { xs: "100px", sm: "200px" },
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "50% 36%",
                            width: "100%",
                        }}
                    ></Box>
                    <div
                        style={{
                            width: "100%",
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
                                LIVE · 5 – 7PM
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
                                {name}
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
    name: PropTypes.string.isRequired,
    iamges: PropTypes.array.isRequired,
    href: PropTypes.string,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
};

export default GridItem;
