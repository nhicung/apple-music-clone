import React, { useEffect, useState } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
} from "@mui/material/";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { getPlaylist, getAlbum } from "../utils/spotify";
import { useParams } from "react-router-dom";

const columns = [
    { id: "song", label: "Song", minWidth: "42%" },
    {
        id: "artist",
        label: "Artist",
        width: "29%",
        borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
    {
        id: "album",
        label: "Album",
        width: "29%",
        borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
    {
        id: "time",
        label: "Time",
        minWidth: "132px",
        borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
];

export default function StickyHeadTable({ songList }) {
    const [playlist, setPlaylist] = useState([]);
    const [album, setAlbum] = useState([]);

    const params = useParams();

    useEffect(() => {
        getPlaylist(params.id).then((res) => setPlaylist(res.tracks.rows));
        getAlbum(params.id).then((res) => setAlbum(res.tracks.rows));
    }, []);
    return (
        <Paper
            sx={{
                width: "100%",
                overflow: "hidden",
                boxShadow: "none",
                mt: "16px",
                ml: "-10px",
            }}
        >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table
                    stickyHeader
                    aria-label="sticky table"
                    size="small"
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none",
                            paddingLeft: "20px",
                            fontSize: "13px",
                            color: "lighter.main",
                        },
                    }}
                >
                    <TableHead>
                        <TableRow
                            sx={{
                                "& th": {
                                    fontSize: "12px !important",
                                    color: "lighter.main",
                                    fontWeight: 600,
                                },
                            }}
                        >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{
                                        width: column.width,
                                        borderLeft: column.borderLeft,
                                        padding: 0,
                                        paddingLeft: "20px",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {songList.map((row) => {
                            // var row;
                            if (row.type !== "album") {
                                row = row.track;
                            }
                            console.log(row + "here");
                            var minutes = Math.floor(row.duration_ms / 60000);
                            var seconds = (
                                (row.duration_ms % 60000) /
                                1000
                            ).toFixed(0);
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                >
                                    <TableCell
                                        sx={{
                                            display: "flex",
                                            alignrows: "center",
                                            borderBottom: "none",
                                            color: "black !important",
                                        }}
                                    >
                                        {row.type === "album" || (
                                            <div
                                                style={{ marginRight: "20px" }}
                                            >
                                                <img
                                                    src={
                                                        row.album.images[0].url
                                                    }
                                                    height="40"
                                                    style={{
                                                        borderRadius: "3px",
                                                    }}
                                                />
                                            </div>
                                        )}
                                        {row.name}
                                    </TableCell>
                                    <TableCell>
                                        {row.artists?.[0].name}
                                    </TableCell>
                                    <TableCell>{row.album?.name}</TableCell>
                                    <TableCell
                                        sx={{
                                            display: "flex",
                                            alignrows: "center",
                                        }}
                                    >
                                        {seconds == 60
                                            ? minutes + 1 + ":00"
                                            : minutes +
                                              ":" +
                                              (seconds < 10 ? "0" : "") +
                                              seconds}
                                        <IconButton
                                            fontSize="small"
                                            color="secondary"
                                        >
                                            <MoreHorizRoundedIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
