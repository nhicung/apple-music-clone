import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography } from "@mui/material/";

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

export const GridItem = ({ title, media, url }) => {
  const styles = useStyles();
  return (
    <Grid item direction="column" align="center" className={styles.gridItem}>
      <Link href={url} style={{ textDecoration: "none" }}>
        <div className={styles.frame}>
          <img href={url} src={media} alt={title} className={styles.pic} />
        </div>
        <div className={styles.description}>
          <Typography
            className={styles.title}
            sx={{ fontSize: 14, fontWeight: 400 }}
          >
            {title}
          </Typography>
        </div>
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
