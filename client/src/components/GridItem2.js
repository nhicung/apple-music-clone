import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography, IconButton, Box } from "@mui/material/";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const useStyles = makeStyles(() => ({
    gridItem: {
        listStyle: "none",
        height: "auto",
        padding: "10px",
        "&:hover": {
            cursor: "pointer",
            filter: "brightness(0.85)",
            "& $playButton": {
                transform: "translate3d(0,0,50px)",
                opacity: 1,
            },
        },
    },
    pic: {
        height: "auto",
        maxWidth: "100%",
        borderRadius: 6,
        transition: " .1s ease-in",
    },
    title: {},
    buttonGroup: {},
    playButton: {
        backdropFilter: "blur(5px)",
        fontSize: 40,
        opacity: 0,
    },
}));

export const GridItem = ({
    item: { description, images, href, type, name },
}) => {
    const styles = useStyles();
    return (
        <Grid item direction="column" className={styles.gridItem}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "6px",
                }}
            >
                <Typography
                    sx={{
                        textTransform: "uppercase",
                        color: "lighter.main",
                        fontSize: "11px",
                        lineHeight: 1.27,
                    }}
                >
                    {type}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "17px",
                        lineHeight: 1.27,
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    sx={{
                        color: "lighter.main",
                        fontSize: "17px",
                        lineHeight: 1.27,
                    }}
                >
                    {type}
                </Typography>
            </div>
            <Link href={href} style={{ textDecoration: "none" }}>
                <Box
                    sx={{
                        position: "relative",
                        borderRadius: 2,
                        transition: " 0.2s ease-in",
                        backgroundImage: `url(${images[0].url})`,
                        height: { xs: "150px", sm: "300px" },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "50% 36%",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            background:
                                "linear-gradient(transparent 0,rgba(0,0,0,.4))",
                            height: 150,
                            width: "100%",
                            position: "absolute",
                            bottom: 0,
                            borderRadius: 2,
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                color: "rgba(255,255,255,0.4)",
                                transition: "0.3s",
                                display: "flex",
                                alignItems: "flex-end",
                                whiteSpace: "normal",
                                minHeight: 100,
                                justifyContent: "space-between",
                                left: 5,
                                right: 5,
                                bottom: "2%",
                            }}
                        >
                            <Typography
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    fontSize: { xs: "12px", sm: "14px" },
                                    fontWeight: 300,
                                    color: "white",
                                    padding: 1,
                                }}
                            >
                                {description}
                            </Typography>
                            <IconButton
                                size="small"
                                className={styles.playButton}
                            >
                                <PlayCircleIcon
                                    sx={{
                                        fontSize: 40,
                                        zIndex: 5,
                                        "&:hover": {
                                            cursor: "pointer",
                                            color: "secondary.main",
                                        },
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Grid>
    );
};

GridItem.propTypes = {
    // description: PropTypes.string.isRequired,
    // media: PropTypes.string.isRequired,
    // url: PropTypes.string,
    // textColor: PropTypes.string.isRequired,
    // type: PropTypes.string.isRequired,
    // line1: PropTypes.string.isRequired,
    // line2: PropTypes.string.isRequired,
};

export default GridItem;
