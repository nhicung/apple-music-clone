import React from "react";
import { Grid } from "@mui/material/";

export const GridList = ({ itemList, itemView, col }) => {
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
