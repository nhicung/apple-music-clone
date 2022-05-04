import * as React from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: 0,
    p: 0,
    borderRadius: "10px",
    boxShadow: "0 2px 20px rgb(0 0 0 / 24%)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    minWidth: "300px",
    maxHeight: " calc(100vh - 160px)",
    maxWidth: "550px",
    overflow: "hidden",
    position: "relative",
    width: "calc(100% - 50px)",
};

export default function BasicModal({ open, onClose, name, type, description }) {
    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <IconButton
                        onClick={handleClose}
                        size="large"
                        sx={{
                            position: "absolute",
                            left: 10,
                            top: 10,
                            color: "lighter.main",
                            padding: 0,
                            fontSize: "2em",
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    <div style={{ padding: "44px 30px 16px", width: "100%" }}>
                        <Typography
                            id="modal-modal-title"
                            variant="h1"
                            sx={{
                                fontWeight: 700,
                                fontSize: "34px",
                                lineHeight: 1.17649,
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                color: "lighter.main",
                                lineHeight: 1.25,
                            }}
                        >
                            {type}
                        </Typography>
                    </div>
                    <div
                        style={{
                            minHeight: " 200px",
                            overflow: "scroll",
                            padding: "4px 30px 28px",
                            width: "100%",
                        }}
                    >
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                mt: "10px",
                                fontSize: "13px",
                                lineHeight: 1.23077,
                            }}
                        >
                            {description}
                        </Typography>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
