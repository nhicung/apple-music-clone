import React from "react";
import { Grid } from "@mui/material/";

export const GridList = ({ itemList, itemView, col, titlePosition }) => {
    const ItemView = itemView;

    return (
        <Grid
            spacing={{ xs: 1, sm: 2 }}
            container
            sx={{
                alignItems: "center",
                paddingTop: 0,
            }}
        >
            {itemList.map((item, idx) => (
                <ItemView item={item} col={col} titlePosition={titlePosition} />
            ))}
        </Grid>
    );
};

export default GridList;
