import { ListItemButton } from "@mui/material/";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MenuListItem = ({ children, href, display, ...props }) => {
    const navigate = useNavigate();

    return (
        <ListItemButton
            sx={{
                margin: "0 0 2px",
                padding: "4px",
                borderRadius: "6px",
                height: "32px",
                display: display,
            }}
            props={props}
            onClick={() => {
                navigate(href);
            }}
        >
            {children}
        </ListItemButton>
    );
};

export default MenuListItem;
