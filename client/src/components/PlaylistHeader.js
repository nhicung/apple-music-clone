import * as React from "react";
import {
    Grid,
    Typography,
    Button,
    Stack,
    IconButton,
    Box,
} from "@mui/material/";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import PopUp from "./PopUp";

const PlaylistHeader = ({
    item: { images, release_date, name, type, description, label },
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
        <Grid
            container
            sx={{
                alignItems: "center",
                padding: { xs: "0px 20px 20px", sm: "20px 40px 40px" },
                justifyContent: { xs: "center" },
            }}
        >
            <Grid
                item
                sx={{
                    width: { xs: "100%", sm: "270px" },
                    height: "270px",
                }}
            >
                <IconButton
                    color="secondary"
                    sx={{
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-end",
                        width: "100%",
                    }}
                >
                    <MoreHorizRoundedIcon />
                </IconButton>
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
                    pl: { xs: 0, sm: "34px" },
                    pt: { xs: "20px", sm: 0 },
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
                        sx={{
                            fontWeight: 600,
                            fontSize: "26px",
                            mt: { xs: "41px", sm: 0 },
                            display: { xs: "flex", sm: "inline" },
                            justifyContent: { xs: "center", sm: "flex-start" },
                            width: "100%",
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{
                            width: "100%",
                            fontSize: "26px",
                            color: "secondary.main",
                            lineHeight: 1.3,
                            display: { xs: "flex", sm: "inline" },
                            justifyContent: { xs: "center", sm: "flex-start" },
                            width: "100%",
                        }}
                    >
                        {label || type}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "lighter.main",
                            textTransform: "uppercase",
                            display: { xs: "flex", sm: "inline" },
                            justifyContent: { xs: "center", sm: "flex-start" },
                            width: "100%",
                        }}
                    >
                        {release_date || "Updated Yesterday"}
                    </Typography>
                    <Box
                        sx={{
                            marginTop: { xs: 0, sm: "23px" },
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
                                        mb: { xs: 0, sm: "-5px" },
                                        position: "absolute",
                                        textDecoration: "none",
                                        lineHeight: "inherit",
                                        bottom: { sm: 0 },
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
                    </Box>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            width: "100%",
                            marginTop: "23px",
                            justifyContent: {
                                xs: "center",
                                sm: "space-between",
                            },
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
                        <IconButton
                            color="secondary"
                            sx={{ display: { xs: "none", sm: "flex" } }}
                        >
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
