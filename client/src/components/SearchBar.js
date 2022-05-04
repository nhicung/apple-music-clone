import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Autocomplete, IconButton, Typography } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";
import { getCategories } from "../utils/spotify";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then((res) => setCategories(res));
    }, []);

    return (
        <Autocomplete
            id="country-select-demo"
            sx={{
                minHeight: "54px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            options={categories.map((option) => option.name)}
            autoHighlight
            open={open}
            onInputChange={(_, value) => {
                setOpen(value.length !== 0);
            }}
            onFocus={() => {
                navigate("/search");
            }}
            renderOption={(props, option) => (
                <Box component="li" {...props}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    {option}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    color="focus"
                    style={{ height: "32px" }}
                    label={
                        <div style={{ fontSize: 12, display: "flex" }}>
                            <SearchIcon
                                sx={{
                                    padding: "3px",
                                    transform: "translateY(-10%)",
                                    ml: "5px",
                                    mr: "3px",
                                }}
                            />
                            {open || (
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        "&:focus": { color: "grey" },
                                    }}
                                >
                                    Search
                                </Typography>
                            )}
                        </div>
                    }
                    InputLabelProps={{
                        shrink: false,
                        style: {
                            height: "32px",
                            top: "80%",
                            transform: "translateY(-50%)",
                        },
                    }}
                    inputProps={{
                        ...params.inputProps,
                        style: { padding: "0 14px", fontSize: "12px" },
                    }}
                />
            )}
        />
    );
};
export default SearchBar;
