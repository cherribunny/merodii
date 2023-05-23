import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';

import Header from './Header';
import webthemes from '../static/webthemes'

// material-ui icons
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  imageList: {
    display: 'flex',
    width: '85%',
    height: '750px',
    overflowY: 'scroll',
  },
  imageBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  smallIcon: {
    color: '#fff',
    "& svg": {
      fontSize: 25
    }
  },
}));

function ThemesPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header webtheme={props.webtheme} />
      <ImageList className={classes.imageList} cols={5} rowHeight={120}>
          {webthemes.map((item) => (
            <ImageListItem key={item.thumbnail}>
              <img
                src={`/merodii/${item.thumbnail}?w=100&h=100&fit=crop&auto=format`}
                alt={item.title}
              />
              {/* handleThemeChange passes the new theme ID back to the parent, App.js */}
              <ImageListItemBar
                className={classes.imageBar}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton className={classes.smallIcon} onClick={() => props.handleThemeChange(item.id)}>
                    <CheckCircleOutlineIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div >);
}

export default ThemesPage;