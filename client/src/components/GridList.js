import React from "react";
import { Grid } from "@mui/material/";

export const GridList = ({ itemList, itemView, col, titlePosition }) => {
    const ItemView = itemView;

    return (
        <Grid
            spacing={2}
            container
            sx={{ alignItems: "center", padding: "0 10px" }}
        >
            {itemList.map((item, idx) => (
                <ItemView item={item} col={col} titlePosition={titlePosition} />
            ))}
        </Grid>
    );
};

export default GridList;
