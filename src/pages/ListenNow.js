import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import AppleMusicLogo from "../images/apple-music.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
        justifyContent: "center",
        display: "flex",
        height: "100vh",
    },
    paper: {
        padding: theme.spacing(2),
        // backgroundColor: "#000000",
        // color: "#FFFFFF",
        align: "center",
        margin: "auto",
        paddingTop: "3%",
        boxShadow: "none",
    },
    container: {
        justifyContent: "center",
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
    loginButton: {
        textTransform: "none",
        width: "50%",
        color: "white",
        background: "#02AA02",
        "&:hover": {
            backgroundColor: "#017601",
        },
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
                    <Grid item xs={12} md={7} align="center">
                        <img
                            width={85}
                            src={AppleMusicLogo}
                            style={{ marginLeft: "5px" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={7} align="center">
                        <Typography
                            variant="h5"
                            className={classes.textDescription}
                        >
                            Discover new music everyday.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7} align="center">
                        <Typography
                            variant="h5"
                            className={classes.textDescription}
                        >
                            Get playlists and albums inspired by the artists and
                            genres you're listening to. 1 month free, then
                            $9.99/month.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7} align="center">
                        <Button
                            variant="contained"
                            size="medium"
                            className={classes.loginButton}
                        >
                            Try It Free
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={7} align="center">
                        <Button
                            variant="contained"
                            size="medium"
                            className={classes.loginButton}
                        >
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default ListenNowPage;
