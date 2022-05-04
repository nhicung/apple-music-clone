import * as React from "react";
import { Typography, Grid } from "@mui/material";

const columns = [
    { id: 1, label: "Internet Service Terms" },
    {
        id: 2,
        label: "Apple Music & Privacy",
        borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
    {
        id: 3,
        label: "Cookie Warning",
        borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
    {
        id: 4,
        label: "Support",
        borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
    {
        id: 5,
        label: "Feedback",
        borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
];

export const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <footer style={{ padding: "19px", background: "rgba(0, 0, 0, 0.05)" }}>
            <Grid
                container
                sx={{ flexDirection: { md: "row-reverse", xs: "none" } }}
            >
                <Grid item xs={12} md={4} sx={{ pb: { xs: "20px", md: 0 } }}>
                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "flex-start",
                                md: "flex-end",
                            },
                            color: "lighter.main",
                            fontSize: "11px",
                        }}
                    >
                        United States
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography
                        sx={{
                            fontSize: "11px",
                            lineHeight: 1.27273,
                            fontWeight: 400,
                            letterSpacing: 0,
                            justifyContent: "space-between",
                            mb: "5px",
                            color: "lighter.main",
                        }}
                    >
                        Copyright &copy; 2022{" "}
                        <a
                            href="htttps://www.apple.com"
                            target="_blank"
                            style={{
                                cursor: "pointer",
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            Apple Inc.
                        </a>{" "}
                        All rights reserved.
                    </Typography>
                    <ul
                        style={{
                            fontSize: "11px",
                            color: "black",
                            display: "flex",
                            flexWrap: "wrap",
                            listStyle: "none",
                            padding: 0,
                            marginLeft: "-10px",
                        }}
                    >
                        {columns.map((column) => (
                            <li
                                style={{
                                    borderRight: column.borderLeft,
                                    padding: "0px 10px",
                                }}
                            >
                                <a href="">{column.label}</a>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </footer>
    );
};
export default Footer;
