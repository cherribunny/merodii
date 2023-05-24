import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import webthemes from './static/webthemes'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import Home from './components/Home';
import Sounds from "./components/Sounds";
import ThemesPage from "./components/ThemesPage";
import ToDoListPage from "./components/ToDoListPage";
import NotFoundPage from "./components/NotFoundPage";
import TimerPanel from './components/TimerPanel';
import QuotesPage from './components/QuotesPage';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100wh',
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: (webtheme) => webtheme.bg,
    fontFamily: 'Roboto',
  },
  timerPanel: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  soundPanel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0px',
  }
}));

function App() {

  // webtheme, default is 0
  const [webtheme, setWebtheme] = useState(webthemes[0]);
  const handleThemeChange = (newID) => {
    // console.log("back to parent")
    console.log(newID);
    setWebtheme(webthemes[newID]);
    // save webtheme to localStorage
    localStorage.setItem('Theme Data', JSON.stringify(webthemes[newID]));
  }
  // get webtheme from localStorage
  let getTheme = () => {
    setWebtheme(JSON.parse(localStorage.getItem("Theme Data")));
  }
  // get the theme when webpage is loaded, only when it already exists in local storage
  // checking if it's null prevents getting a blank page on load
  useEffect(() => {
    if (localStorage.getItem("Theme Data") != null)
      getTheme();
  }, [])


  const classes = useStyles(webtheme);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home webtheme={webtheme} />} />
          <Route path="/themes" element={<ThemesPage webtheme={webtheme} handleThemeChange={handleThemeChange} />} />
          <Route path="/quotes" element={<QuotesPage webtheme={webtheme} />} />
          <Route path="/todo" element={<ToDoListPage webtheme={webtheme} />} />
          <Route path="*" element={<NotFoundPage webtheme={webtheme} />} />
        </Routes>
      </Router>

      <TimerPanel className={classes.timerPanel} webtheme={webtheme} />

      {/* display Spotify playlist and list of sounds, accessible from any page */}
      <div className={classes.soundPanel}>
        <iframe src="https://open.spotify.com/embed/user/animegirl4lyfe/playlist/6ezGrT6YwKjsYWmpRM6hEK" width="300" height="360" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <Sounds webtheme={webtheme} />
      </div>
    </div>
  );
}

export default App;
