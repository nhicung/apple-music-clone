import * as React from "react";
import { Toolbar, AppBar, Icon, Slider, Stack, Grid } from "@mui/material/";
import AppleIcon from "@mui/icons-material/Apple";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import MusicPlayer from "./MusicPlayer";
import { Box } from "@mui/material/";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";

const drawerWidth = 260;

const TopBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height: "55px",
        background: "white",
      }}
    >
      <Toolbar style={{ minHeight: "55px", padding:0 }}>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid
            item
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MusicPlayer />
          </Grid>
          <Grid
            item
            xs
            sx={{
              //   width: "auto",
              //   position: "absolute",
              //   top: "5px",
              zIndex: " 1",
              //   left: "5px",
              //   right: "5px",
              boxShadow: "inset 0 0 0 0.5px rgba(0, 0, 0, 0.2)",
              height: "44px",
              width: "100%",
              maxWidth: "900px",
              gridArea: "1/2/2/2",
              justifySelf: "start",
              display: "flex",
            }}
          >
            <div style={{ width: "fit-content" }}>
              <img
                src="https://music.apple.com/assets/product/MissingArtworkMusic.svg"
                height="44"
                width="44"
              />
            </div>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                zIndex: "1",
                width: "100%",
              }}
            >
              <Icon
                sx={{
                  height: "24px",
                  position: "absolute",
                  margin: "auto",
                  top: "8px",
                  zIndex: "2",
                  left: 0,
                  right: 0,
                  display: "block",
                  color: "lighter.main",
                }}
              >
                <AppleIcon
                  sx={{
                    fontSize: "26px",
                  }}
                />
              </Icon>
            </div>
          </Grid>
          <Grid
            item
            xs
            // style={{
            //   width: "auto",
            //   position: "absolute",
            //   top: "14px",
            //   zIndex: 3,
            //   right: 0,
            //   paddingRight: "12px",
            // }}
          >
            <Icon color="secondary">
              <AccountCircleIcon
                sx={{
                  fontSize: "26px",
                }}
              />
            </Icon>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
