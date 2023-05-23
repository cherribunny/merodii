import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import CenterText from './CenterText';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

function NotFoundPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header webtheme={props.webtheme}/>
      <CenterText text={"Page Not Found!"}/>
    </div>);
}

export default NotFoundPage;