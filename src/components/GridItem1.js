import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography, IconButton } from "@mui/material/";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const useStyles = makeStyles(() => ({
  gridItem: {
    listStyle: "none",
    height: "auto",
    display: "inline-block",
    padding: 20,
  },
  frame: {
    display: "inline-block",
    position: "relative",
    "&:hover": {
      cursor: "pointer",
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
  },
  description: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fffff",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
  },
  buttonGroup: {
    position: "absolute !important",
    color: "grey !important",
    opacity: 0,
    bottom: "3%",
    transition: "0.3s !important",
  },
  playButton: {
    left: "3%",
    fontSize: 60,
    zIndex: 5,
  },
  moreButton: {
    right: "3%",
    fontSize: 60,
  },
}));

export const GridItem = ({ item: { title, subtitle, media, url },col }) => {
  const styles = useStyles();
  return (
    <Grid xs={12/col} item direction="column" align="center" className={styles.gridItem}>
      <Link href={url} style={{ textDecoration: "none" }}>
        <div className={styles.frame}>
          <img href={url} src={media} alt={title} className={styles.pic} />
          <IconButton
            href={url}
            target="blank"
            className={cx(styles.buttonGroup, styles.playButton)}
            size="small"
          >
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
          <IconButton
            href={url}
            target="blank"
            className={cx(styles.buttonGroup, styles.moreButton)}
            size="small"
          >
            <MoreHorizRoundedIcon
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
        <div className={styles.description}>
          <Typography
            className={styles.title}
            sx={{ fontSize: 16, fontWeight: 400 }}
          >
            {title}
          </Typography>
          <Typography
            className={styles.title}
            sx={{ fontSize: 14, fontWeight: 300, color: "subtitle.main" }}
          >
            {subtitle}
          </Typography>
        </div>
      </Link>
    </Grid>
  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  url: PropTypes.string,
  textColor: PropTypes.string.isRequired,
  col: PropTypes.number.isRequired,
};

export default GridItem;
