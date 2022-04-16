import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography } from "@mui/material/";

export const GridList = ({itemList, itemView, col}) => {
  // const styles = useStyles();
    const ItemView = itemView;

  return (
    <Grid container sx={{ alignItems: "center" }}>
      {itemList.map((item, idx) => (
              <ItemView item={item} col={col} />
      ))}
    </Grid>
  );
};

export default GridList;
