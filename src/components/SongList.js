import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";

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
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
              paddingLeft: "20px",
            },
          }}
        >
          <TableHead>
            <TableRow>
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
                    }}
                  >
                    <img src={row.image} height="40" />
                    {row.song}
                  </TableCell>
                  <TableCell>{row.artist}</TableCell>
                  <TableCell>{row.album}</TableCell>
                  <TableCell>{row.time}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
