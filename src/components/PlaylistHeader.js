import * as React from "react";
import {
  Toolbar,
  AppBar,
  Icon,
  Slider,
  Stack,
  Grid,
  Box,
} from "@mui/material/";
import AppleIcon from "@mui/icons-material/Apple";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import MusicPlayer from "./MusicPlayer";

const PlaylistHeader = ({ image, title, category, subtitle, description }) => {
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
            src="https://is3-ssl.mzstatic.com/image/thumb/Features114/v4/24/12/9b/24129b24-6f0e-6c28-22d2-cbc248cc0a32/U0RTLU1TLVdXLUFsaXN0UG9wLUFEQU1fSUQ9MTAwNDc3NjIwMi5wbmc.png/44x44br-60.jpg"
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
              src="https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/2a/85/e3/2a85e3b4-5503-29fa-ca4d-f6afd9a98f1c/Job14d62ca2-3fc9-4292-a4f8-54dbb0859c94-108238143-PreviewImage_PreviewImageIntermediate_preview_image_nonvideo-Time1607894324638.png/540x540cc.webp"
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
      <Grid item>Example</Grid>
    </Grid>
  );
};

export default PlaylistHeader;
