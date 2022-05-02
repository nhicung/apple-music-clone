import { ListItemButton } from "@mui/material/";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MenuListItem = ({ children, href, ...props }) => {
    const navigate = useNavigate();

    return (
        <ListItemButton
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
