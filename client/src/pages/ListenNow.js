import React from "react";
import { Button, Grid, Paper, Typography, Box } from "@mui/material";
import AppleMusicLogo from "../images/apple-music.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MacScreenshot from "../images/MacScreenshot.webp";

const ListenNowPage = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                justifyContent: "center",
                height: "calc(100% - 55px)",
                top: { xs: 0, sm: "55px" },
                paddingTop: "76px",
                position: "fixed",
            }}
        >
            <Paper
                sx={{
                    // padding: "8px",
                    align: "center",
                    margin: "auto",
                    paddingTop: "3%",
                    boxShadow: "none !important",
                    maxWidth: "75%",
                    justifyContent: "center",
                    display: "flex",
                }}
                elevation={3}
            >
                <Grid
                    container
                    spacing={1}
                    align="center"
                    sx={{
                        justifyContent: "center",
                        maxWidth: { xs: "100%", sm: "75%" },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        align="center"
                        sx={{
                            display: { xs: "none", sm: "inline" },
                            paddingRight: "8px",
                        }}
                    >
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
                                fontSize: { xs: "28px", sm: "48px" },
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
                                fontSize: { xs: "13px", sm: "17px" },
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
                            sx={{
                                backgroundColor: "secondary.main",
                                textTransform: "none",
                                minWidth: "125px",
                            }}
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
                            sx={{
                                textTransform: "none",
                            }}
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
        </Box>
    );
};

export default ListenNowPage;
