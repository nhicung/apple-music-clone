import * as React from "react";
import { Toolbar, AppBar, Icon } from "@mui/material/";
import AppleIcon from "@mui/icons-material/Apple";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 260;

export const TopBar = () => {
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
      <Toolbar>
        <div
          style={{
            width: "auto",
            position: "absolute",
            top: "5px",
            zIndex: " 1",
            left: "5px",
            right: "5px",
            boxShadow: "inset 0 0 0 0.5px rgba(0, 0, 0, 0.2)",
            height: "44px",
            display: "flex",
          }}
        >
          <div>
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
        </div>
        <div
          style={{
            width: "auto",
            position: "absolute",
            top: "14px",
            zIndex: 3,
            right: 0,
            paddingRight: "12px",
          }}
        >
          <Icon color="secondary">
            <AccountCircleIcon
              sx={{
                fontSize: "26px",
              }}
            />
          </Icon>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
