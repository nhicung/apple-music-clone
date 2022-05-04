import * as React from "react";
import { Grid, Typography, Button, Stack, IconButton } from "@mui/material/";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import PopUp from "./PopUp";

const PlaylistHeader = ({
    item: { images, imageLayer, name, type, description },
}) => {
    const charLimit = 200;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // console.log(images);
    return (
        <Grid container sx={{ alignItems: "center", mb: "40px" }}>
            <Grid
                item
                sx={{
                    width: "270px",
                    height: "270px",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "270px",
                        maxHeight: "270px",
                        marginInlineStart: "auto",
                        marginInlineEnd: "auto",
                        zIndex: 1001,
                        borderRadius: "6px",
                    }}
                >
                    <img
                        src={images?.[0].url}
                        width="270px"
                        height="270px"
                        style={{
                            borderRadius: "6px",
                        }}
                    />
                </div>
            </Grid>
            <Grid
                item
                sm
                sx={{
                    pl: "34px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        height: "100%",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 600, fontSize: "26px", mt: "41px" }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{
                            width: "100%",
                            fontSize: "26px",
                            color: "secondary.main",
                        }}
                    >
                        {type}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "lighter.main",
                            textTransform: "uppercase",
                        }}
                    >
                        Updated Yesterday
                    </Typography>
                    <div
                        style={{
                            marginTop: "23px",
                            maxWidth: "440px",
                            width: "100%",
                        }}
                    >
                        {description && (
                            <div
                                style={{ position: "relative", width: "100%" }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                    }}
                                >
                                    {description?.length > charLimit
                                        ? description.substring(0, charLimit) +
                                          "..."
                                        : description}
                                    {/* {description} */}
                                </Typography>
                                <Button
                                    sx={{
                                        mb: "-5px",
                                        position: "absolute",
                                        textDecoration: "none",
                                        lineHeight: "inherit",
                                        bottom: 0,
                                        zIndex: 1,
                                        right: 0,
                                        fontSize: "12px",
                                        fontWeight: 550,
                                    }}
                                    fontSize="inherit"
                                    size="small"
                                    onClick={handleOpen}
                                >
                                    More
                                </Button>
                            </div>
                        )}
                    </div>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            width: "100%",
                            marginTop: "23px",
                        }}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            sx={{
                                textTransform: "none",
                            }}
                            startIcon={<PlayArrowIcon />}
                        >
                            Preview
                        </Button>
                        <IconButton color="secondary">
                            <MoreHorizRoundedIcon />
                        </IconButton>
                    </Stack>
                </div>
            </Grid>
            <PopUp
                open={open}
                onClose={handleClose}
                name={name}
                type={type}
                description={description}
            />
        </Grid>
    );
};

export default PlaylistHeader;
