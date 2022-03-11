import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@mui/styles';
import {Grid, Link, Typography, IconButton} from '@mui/material/';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const useStyles = makeStyles(() => ({
    gridItem: {
        listStyle: 'none',
        height: 'auto',
    },
    frame:{
        display:'inline-block',
        position:'relative',
        '&:hover': {
            cursor: 'pointer',
            '& $buttonGroup': {
                transform: 'translate3d(0,0,50px)',
                opacity: 1,
            }
        }
    },
    pic: {
        height: 'auto',
        maxWidth: '100%',
    },
    description:{
        paddingTop: 10,
        paddingBottom: 10,
        width: 450,
        color: '#fffff',
    },
    title: {
        display:'flex',
        justifyContent:'flex-start'
    },
    buttonGroup:{
        position: 'absolute',
        color: 'grey',
        opacity: 0,
        top:'81%',
        transition: '0.3s',
    },
    playButton: {
        left:'3%',
        fontSize: 60,
    },
    moreButton: {
        left:'83%',
        fontSize: 60,
    },
}));

export const GridItem = ({ title, subTitle, media, url }) => {
    const styles = useStyles();
    return (
        <Grid
            item
            direction="column"
            align="center"
            className={styles.gridItem}>
        <Link href={url} style={{ textDecoration: 'none' }}>
            <div className={styles.frame}>
                <img
                    href={url}
                    src={media}
                    alt={title}
                    className={styles.pic} />
                <IconButton
                    href={url}
                    target='blank'
                    className={cx(styles.buttonGroup, styles.playButton)}
                    size='small'
                >
                    <PlayCircleIcon sx={{fontSize:60}}/>
                </IconButton>
                <IconButton
                    href={url}
                    target='blank'
                    className={cx(styles.buttonGroup, styles.moreButton)}
                    size='small'
                >
                    <MoreHorizRoundedIcon sx={{fontSize:60}}/>
                </IconButton>
            </div>
            <div className={styles.description}>
                <Typography 
                    className={styles.title}
                    sx={{fontSize: 16, fontWeight: 400,}}>
                    {title}
                </Typography>
                <Typography 
                    className={styles.title}
                    sx={{fontSize: 14, fontWeight: 300,}}>
                    {subTitle}
                </Typography>
            </div>
        </Link>
    </Grid>
    );
};

GridItem.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    url: PropTypes.string,
    textColor: PropTypes.string.isRequired,
};

export default GridItem ;
