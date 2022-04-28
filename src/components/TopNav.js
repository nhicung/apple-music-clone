import * as React from 'react';
import {
    Toolbar,
    AppBar,
    Icon,
    Slider,
    Stack,
    Grid,
    Box,
} from '@mui/material/';
import AppleIcon from '@mui/icons-material/Apple';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import MusicPlayer from './MusicPlayer';

const drawerWidth = 260;

const TopBar = () => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AppBar
            position='fixed'
            elevation={0}
            sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
                height: '55px',
            }}
        >
            <Toolbar
                style={{
                    minHeight: '55px',
                    padding: 0,
                    backgroundColor: '#fafafa',
                    borderBottom: 'solid rgba(0, 0, 0, 0.2) 0.5px',
                }}
            >
                <Grid container sx={{ alignItems: 'center' }}>
                    <Grid
                        item
                        sx={{
                            width: '30%',
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <MusicPlayer />
                    </Grid>
                    <Grid
                        item
                        sx={{
                            position: { xs: 'absolute', md: 'inherit' },
                            top: { xs: '5px' },
                            left: { xs: '5px' },
                            right: { xs: '5px' },
                            maxWidth: { xs: '900px' },
                            boxShadow: 'inset 0 0 0 0.5px rgba(0, 0, 0, 0.2)',
                            height: '44px',
                            zIndex: ' 1',
                            display: 'flex',
                            width: { md: '40%' },
                            gridArea: { md: '1/2/2/2' },
                            justifySelf: { md: 'start' },
                        }}
                    >
                        <div style={{ width: 'fit-content' }}>
                            <img
                                src='https://music.apple.com/assets/product/MissingArtworkMusic.svg'
                                height='44'
                                width='44'
                            />
                        </div>
                        <div
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                zIndex: '1',
                                width: '100%',
                            }}
                        >
                            <Icon
                                sx={{
                                    height: '24px',
                                    position: 'absolute',
                                    margin: 'auto',
                                    top: '8px',
                                    zIndex: '2',
                                    left: 0,
                                    right: 0,
                                    display: 'block',
                                    color: 'lighter.main',
                                }}
                            >
                                <AppleIcon
                                    sx={{
                                        fontSize: '26px',
                                    }}
                                />
                            </Icon>
                        </div>
                    </Grid>
                    <Grid item xs sx={{ display: 'flex' }}>
                        <Grid
                            container
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                            }}
                        >
                            <Grid
                                item
                                sx={{
                                    width: '75%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: { xs: 'none', md: 'flex' },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 110,
                                        color: 'black',
                                        opacity: 0.5,
                                    }}
                                >
                                    <Stack
                                        spacing={2}
                                        direction='row'
                                        alignItems='center'
                                    >
                                        <VolumeUpRoundedIcon
                                            sx={{ fontSize: '18px' }}
                                        />
                                        <Slider
                                            aria-label='Volume'
                                            size='small'
                                            value={value}
                                            onChange={handleChange}
                                        />
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs
                                sx={{
                                    color: 'black',
                                    opacity: 0.5,
                                    display: { xs: 'none', md: 'flex' },
                                }}
                            >
                                <ListRoundedIcon />
                            </Grid>
                            <Grid
                                item
                                xs
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    pr: '20px',
                                }}
                            >
                                <Icon color='secondary'>
                                    <AccountCircleIcon
                                        sx={{
                                            fontSize: '26px',
                                        }}
                                    />
                                </Icon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
