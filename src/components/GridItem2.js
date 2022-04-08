import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography, IconButton, Box } from "@mui/material/";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const useStyles = makeStyles(() => ({
  gridItem: {
    listStyle: "none",
    height: "auto",
    display: "inline-block",
  },
  frame: {
    display: "inline-block",
    position: "relative",
    borderRadius: 6,
    transition: " 0.2s ease-in",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(0.85)",
      "& $buttonGroup": {
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
  title: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: 14,
    fontWeight: 300,
    color: "white",
    padding: 20,
    paddingLeft: 10,
  },
  buttonGroup: {
    position: "absolute",
    color: "rgba(255,255,255,0.4)",
    opacity: 0,
    transition: "0.3s",
    display: "flex",
    alignItems: "flex-end",
    whiteSpace: "normal",
    minHeight: 100,
    justifyContent: "space-between",
    left: 15,
    right: 15,
    bottom: "2%",
  },
  playButton: {
    backdropFilter: "blur(5px)",

    right: "2%",
    fontSize: 60,
  },
}));

export const GridItem = ({
  item: { subTitle, media, url, subHead, line1, line2 },
}) => {
  const styles = useStyles();
  return (
    <Grid item direction="column" className={styles.gridItem}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.5,
          marginBottom: "6px",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "lighter.main",
            fontSize: "11px",
          }}
        >
          {subHead}
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
          }}
        >
          {line1}
        </Typography>
        <Typography
          sx={{
            color: "lighter.main",
            fontSize: "17px",
          }}
        >
          {line2}
        </Typography>
      </div>
      <Link href={url} style={{ textDecoration: "none" }}>
        <div className={styles.frame}>
          <img href={url} src={media} alt={subTitle} className={styles.pic} />
          <Box
            sx={{
              opacity: 1,
              background: "linear-gradient(transparent 0,rgba(0,0,0,.4))",
              height: 300,
              width: "100%",
              position: "absolute",
              bottom: ".5%",
              left: 0,
              right: 0,
            }}
          >
            <div href={url} target="blank" className={styles.buttonGroup}>
              <Typography className={styles.title}>{subTitle}</Typography>
              <IconButton size="small" className={styles.playButton}>
                <PlayCircleIcon
                  sx={{
                    fontSize: 60,
                    zIndex: 5,
                    "&:hover": {
                      cursor: "pointer",
                      color: "secondary.main",
                    },
                  }}
                />
              </IconButton>
            </div>
          </Box>
        </div>
      </Link>
    </Grid>
  );
};

GridItem.propTypes = {
  subTitle: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  url: PropTypes.string,
  textColor: PropTypes.string.isRequired,
  subHead: PropTypes.string.isRequired,
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string.isRequired,
};

export default GridItem;
