import * as React from "react";
import { Grid, Typography, Button, Stack, IconButton } from "@mui/material/";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import PopUp from "./PopUp";

const PlaylistHeader = ({
  item: { image, imageLayer, title, category, subtitle, description },
}) => {
  const charLimit = 200;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container sx={{ alignItems: "center" }}>
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
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transform: "scale(.88) translateY(calc(6% + 2px))",
              filter: "blur(20px) brightness(100%)",
              opacity: 0.4,
              zIndex: 1,
            }}
            src={imageLayer}
          />
          <div
            style={{
              aspectRatio: 1,
              backgroundColor: "#cc0202",
              boxShadow: "0 10px 20px 0 rgb(0 0 0 / 10%)",
              position: "relative",
              zIndex: 1,
              margin: 0,
              display: "block",
              borderRadius: "6px",
              transition: "background .1s ease-in",
              width: "100%",
              height: "270px",
            }}
          >
            <img
              src={image}
              width="270px"
              height="270px"
              role="presentation"
              style={{
                borderRadius: "6px",
              }}
            />
          </div>
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
            {title}
          </Typography>
          <Typography
            sx={{ width: "100%", fontSize: "26px", color: "secondary.main" }}
          >
            {category}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "lighter.main",
              textTransform: "uppercase",
            }}
          >
            {subtitle}
          </Typography>
          <div
            style={{
              marginTop: "23px",
              maxWidth: "440px",
            }}
          >
            <div style={{ position: "relative" }}>
              <Typography
                sx={{
                  fontSize: "13px",
                }}
              >
                {description.substring(0, charLimit) +
                  (description.length > charLimit ? "..." : "")}
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
      <PopUp open={open} onClose={handleClose} />
    </Grid>
  );
};

export default PlaylistHeader;
