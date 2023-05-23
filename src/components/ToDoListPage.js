import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import ToDoList from "./ToDoList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

function ToDoListPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header webtheme={props.webtheme}/>
      <ToDoList webtheme={props.webtheme}/>
    </div>);
}

export default ToDoListPage;