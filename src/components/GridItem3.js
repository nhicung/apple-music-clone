import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography } from "@mui/material/";

const useStyles = makeStyles(() => ({
  gridItem: {
    listStyle: "none",
    height: "auto",
    display: "inline-block",
    position: "relative",
  },
  frame: {
    display: "inline-block",
    position: "relative",
    borderRadius: 6,
    transition: " 0.2s ease-in",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(0.75)",
    },
  },
  pic: {
    height: "auto",
    maxWidth: "100%",
    borderRadius: 6,
    transition: " .1s ease-in",
  },
  description: {
    color: "#fffff",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));

export const GridItem = ({ item: { title, media, url }, titlePosition }) => {
  const styles = useStyles();
  return (
    <Grid item direction="column" align="center" className={styles.gridItem}>
      <Link href={url} style={{ textDecoration: "none" }}>
        <div className={styles.frame}>
          <img href={url} src={media} alt={title} className={styles.pic} />
        </div>
        {titlePosition === "atBottom" ? (
          <div className={styles.description}>
            <Typography
              className={styles.title}
              sx={{ fontSize: 14, fontWeight: 400 }}
            >
              {title}
            </Typography>
          </div>
        ) : titlePosition === "layOnTop" ? (
          <div
            style={{
              width: " 100%",
              height: "50%",
              position: "absolute",
              bottom: 0,
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <Typography
              className={styles.title}
              sx={{
                fontSize: 16,
                fontWeight: 400,
                mb: "8px",
                width: "100%",
                position: "absolute",
                bottom: 0,
                color: "#fff",
              }}
            >
              {title}
            </Typography>
          </div>
        ) : null}
      </Link>
    </Grid>
  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  url: PropTypes.string,
  textColor: PropTypes.string.isRequired,
};

export default GridItem;
