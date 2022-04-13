import * as React from "react";
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

function createData(image, song, artist, album, time) {
  return { image, song, artist, album, time };
}

const rows = [
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
  createData(
    "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    "Rap Life",
    "Shanwn Mendes",
    "Rap Life",
    "2:55"
  ),
];

export default function StickyHeadTable() {
  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden", boxShadow: "none", mt: "16px" }}
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
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "none",
                      color: "black !important",
                    }}
                  >
                    <div style={{ marginRight: "20px" }}>
                      <img
                        src={row.image}
                        height="40"
                        style={{ borderRadius: "3px" }}
                      />
                    </div>
                    {row.song}
                  </TableCell>
                  <TableCell>{row.artist}</TableCell>
                  <TableCell>{row.album}</TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {row.time}
                    <IconButton fontSize="small" color="secondary">
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
