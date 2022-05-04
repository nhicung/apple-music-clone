import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography, Box } from "@mui/material/";

const useStyles = makeStyles(() => ({
    gridItem: {
        listStyle: "none",
        maxHeight: "200px",
        position: "relative",
        margin: "0",
        padding: "5px",
        "&:hover": {
            cursor: "pointer",
            filter: "brightness(0.50)",
        },
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
                <Box
                    sx={{
                        position: "relative",
                        borderRadius: 3,
                        transition: " 0.2s ease-in",
                        width: "100%",
                        backgroundImage: `url(${icons[0].url})`,
                        height: { xs: "111px", sm: "117px" },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "50% 36%",
                    }}
                ></Box>
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
    name: PropTypes.string.isRequired,
    icons: PropTypes.array.isRequired,
    href: PropTypes.string,
    titlePosition: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
};

export default GridItem;
