import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import AppleMusicLogo from "../images/apple-music.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MacScreenshot from "../images/MacScreenshot.webp";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center",
        height: "calc(100% - 55px)",
        top: "55px",
        paddingTop: "76px",
        position: "fixed",
    },
    paper: {
        padding: theme.spacing(2),
        align: "center",
        margin: "auto",
        paddingTop: "3%",
        boxShadow: "none",
        maxWidth: "75%",
        justifyContent: "center",
        display: "flex",
    },
    container: {
        justifyContent: "center",
        maxWidth: "75%",
    },
    header: {
        fontWeight: "bold",
    },
    textDescription: {
        [theme.breakpoints.up("md")]: {
            fontSize: "1.5rem",
        },
        fontSize: "1.2rem",
    },
    button: {
        textTransform: "none",
        width: "20%",
    },
}));

const ListenNowPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Grid
                    container
                    spacing={1}
                    align="center"
                    className={classes.container}
                >
                    <Grid item xs={12} align="center">
                        <img
                            width={85}
                            src={AppleMusicLogo}
                            style={{ marginLeft: "5px" }}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: "48px",
                                lineHeight: 1.0834933333,
                                fontWeight: 600,
                                letterSpacing: " -.003em",
                            }}
                        >
                            Discover new music every day.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs
                        align="center"
                        sx={{ m: "0 auto 15px", maxWidth: { xs: "440px" } }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: "17px",
                                lineHeight: 1.4118447059,
                                fontWeight: 400,
                                letterSpacing: 0,
                            }}
                        >
                            Get playlists and albums inspired by the artists and
                            genres you're listening to. 1 month free, then
                            $9.99/month.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Button
                            variant="contained"
                            size="medium"
                            className={classes.button}
                        >
                            <Typography
                                sx={{
                                    fontSize: "13px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Try It Free
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} align="center" sx={{ mt: "8px" }}>
                        <Button
                            variant="text"
                            size="medium"
                            className={classes.button}
                        >
                            <Typography
                                sx={{
                                    fontSize: "13px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Learn More
                                <ArrowForwardIosIcon
                                    sx={{ fontSize: "12px" }}
                                />
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={3} sx={{ boxShadow: "none" }}>
                <img
                    src={MacScreenshot}
                    style={{ width: "100%", maxWidth: "1680px" }}
                />
            </Paper>
        </div>
    );
};

export default ListenNowPage;
