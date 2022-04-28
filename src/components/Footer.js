import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Table, TableHead, TableRow, Typography, Grid } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const columns = [
    { id: 1, label: 'Internet Service Terms' },
    {
        id: 2,
        label: 'Apple Music & Privacy',
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
    },
    {
        id: 3,
        label: 'Cookie Warning',
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
    },
    {
        id: 4,
        label: 'Support',
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
    },
    {
        id: 5,
        label: 'Feedback',
        borderLeft: '1px solid rgba(224, 224, 224, 1)',
    },
];

export const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <footer style={{ padding: '19px' }}>
            <Grid container>
                <Grid item xs>
                    <Typography
                        sx={{
                            fontSize: '11px',
                            lineHeight: 1.27273,
                            fontWeight: 400,
                            letterSpacing: 0,
                            justifyContent: 'space-between',
                            mb: '5px',
                            color: 'lighter.main',
                            pl: '10px',
                        }}
                    >
                        Copy right &copy; 2022{' '}
                        <a
                            href='htttps://www.apple.com'
                            target='_blank'
                            style={{
                                cursor: 'pointer',
                                textDecoration: 'none',
                                color: 'black',
                            }}
                        >
                            Apple Inc.
                        </a>{' '}
                        All rights reserved.
                    </Typography>
                    <Table
                        size='small'
                        sx={{
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: 'none',
                                fontSize: '11px',
                                color: 'black',
                            },
                        }}
                    >
                        <TableHead>
                            <TableRow
                                sx={{
                                    '& th': {
                                        //   color: "black",
                                    },
                                }}
                            >
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        style={{
                                            borderLeft: column.borderLeft,
                                            padding: '0px 10px',
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                    </Table>
                </Grid>
                <Grid item xs>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            color: 'lighter.main',
                            fontSize: '11px',
                        }}
                    >
                        United States
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
};
export default Footer;
