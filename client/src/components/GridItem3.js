import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography } from "@mui/material/";

const useStyles = makeStyles(() => ({
    gridItem: {
        listStyle: "none",
        maxHeight: "200px",
        position: "relative",
        margin: "10px 0",
    },
    pic: {
        height: "auto",
        maxWidth: "100%",
        borderRadius: 6,
        transition: " .1s ease-in",
        width: "inherit",
    },
    description: {
        color: "#fffff",
    },
}));

export const GridItem = ({
    item: { name, icons, href },
    titlePosition,
    col,
}) => {
    const styles = useStyles();
    return (
        <Grid
            xs={12 / col}
            item
            direction="column"
            align="center"
            className={styles.gridItem}
        >
            <Link href={href} style={{ textDecoration: "none" }}>
                <div
                    style={{
                        position: "relative",
                        borderRadius: 6,
                        transition: " 0.2s ease-in",
                        width: "100%",
                        "&:hover": {
                            cursor: "pointer",
                            filter: "brightness(0.75)",
                        },
                        backgroundImage: `url(${icons[0].url})`,
                        height: "150px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "50% 36%",
                    }}
                ></div>
                {titlePosition === "atBottom" ? (
                    <div className={styles.description}>
                        <Typography
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                fontSize: 14,
                                fontWeight: 400,
                            }}
                        >
                            {name}
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
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                fontSize: 16,
                                fontWeight: 400,
                                mb: "8px",
                                width: "100%",
                                position: "absolute",
                                bottom: 0,
                                color: "#fff",
                                padding: "5px 10px",
                            }}
                        >
                            {name}
                        </Typography>
                    </div>
                ) : null}
            </Link>
        </Grid>
    );
};

GridItem.propTypes = {
    // title: PropTypes.string.isRequired,
    // media: PropTypes.string.isRequired,
    // url: PropTypes.string,
    // textColor: PropTypes.string.isRequired,
};

export default GridItem;
