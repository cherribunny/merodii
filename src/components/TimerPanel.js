import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Button, Snackbar } from '@material-ui/core';

import Box from '@mui/material/Box';

// material-ui icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// for playing UI sounds
import UIfx from 'uifx';
const snackbarSound = new UIfx("https://github.com/cherribunny/merodii-audio/blob/master/SnackbarSound.mp3?raw=true", {volume: 0.5 });

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerBox: {
        display: 'flex',
        background: props => props.webtheme.color + 'B3',   // 70% transparent
        width: '590px',
        zIndex: 1,
        position: 'absolute',
        top: 'auto',
        bottom: '10px',
        borderRadius: '20px',
        alignItems: 'center',
    },
    smallIcon: {
        color: '#fff',
        "& svg": {
            fontSize: 25
        }
    },
    text: {
        paddingLeft: "10px",
        // color: props => props.webtheme.textColor,
        color: '#fff',
    },
    button: {
        marginLeft: '10px',
        border: 'none',
        borderRadius: '0px 4px 4px 0px',
        cursor: 'pointer',
        outline: '2px',
        background: props => props.webtheme.color,
        color: '#fff',
    },
}));

function TimerPanel(props) {
    const classes = useStyles(props);

    const [selectedFocus, setSelectedFocus] = React.useState(25);
    const [selectedBreak, setSelectedBreak] = React.useState(5);
    // snackbar to notify user about timer resets
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    // useState hooks
    const [mode, setMode] = useState('focus');
    const [paused, setPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(selectedFocus * 60);
    const [totalTime, setTotalTime] = useState(0);  // total focus time for the day
    // useRef hooks, references can persist values between renders
    const modeRef = useRef(mode);
    const pausedRef = useRef(paused);
    const secondsLeftRef = useRef(secondsLeft);
    const totalTimeRef = useRef(totalTime);

    let totalTimes = [];  // array of total focus times, {"date" : focusTimeOnDate}
    // save total times focused to localStorage
    let saveTotalTime = () => {
        // today's date is used as a key in the totalTimes array
        let todayDate = new Date().toISOString().slice(0, 10);
        // console.log(todayDate);

        // if there's already an object for today in localstorage
        if (totalTimes.find(obj => obj.date === todayDate)) {
            let objIndex = totalTimes.findIndex((obj => obj.date === todayDate));
            // find this object in the array update the key
            totalTimes[objIndex].time = totalTimes[objIndex].time + totalTimeRef.current;
        }
        // if no object for today in localstorage yet, add it
        else {
            totalTimes.push({ date: todayDate, time: totalTimeRef.current });
        }

        localStorage.setItem('Total Focus Time', JSON.stringify(totalTimes));
        alert("Your Total Focus Time is saved to local storage!")
    }
    // get total times from localStorage
    let getTotalTime = () => {
        var data = JSON.parse(localStorage.getItem("Total Focus Time"));
        totalTimes = data;
    }
    // get the total focus time when webpage is loaded, only when it already exists in local storage
    useEffect(() => {
        if (localStorage.getItem("Total Focus Time") != null)
            getTotalTime();
    }, [])

    // for the timer display
    let minutes = Math.floor(secondsLeft / 60);
    if (minutes < 10)
        minutes = '0' + minutes;    // add padding 0 to the front
    let seconds = secondsLeft % 60;
    if (seconds < 10)
        seconds = '0' + seconds;

    // for the total time tracker
    let totalH = Math.floor(totalTimeRef.current / 3600);
    if (totalH < 10)
        totalH = '0' + totalH;
    let totalM = Math.floor(totalTimeRef.current % 3600 / 60);
    if (totalM < 10)
        totalM = '0' + totalM;

    const twentyFiveFive = () => {
        // focus 25 minutes, break 5 minutes
        setSelectedFocus(25);
        setSelectedBreak(5);
        initTimer();
    };

    const fortyFiveFifteen = () => {
        // focus 45 minutes, break 15 minutes
        setSelectedFocus(45);
        setSelectedBreak(15);
        initTimer();
    };

    const initTimer = () => {
        setSecondsLeft(selectedFocus * 60);
        secondsLeftRef.current = selectedFocus * 60;
    };

    const tick = () => {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    };

    const switchMode = () => {
        // update the total time focused
        if (modeRef.current === 'focus') {
            setTotalTime(totalTime + selectedFocus * 60);
            totalTimeRef.current += selectedFocus * 60;
        }

        const nextMode = (modeRef.current === 'focus' ? 'break' : 'focus');
        setMode(nextMode);
        modeRef.current = nextMode;

        const nextSeconds = (nextMode === 'focus' ? selectedFocus : selectedBreak) * 60;
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;

    };

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (pausedRef.current)
                return;
            if (secondsLeftRef.current === 0) {
                // open snackbar notificaion, play a sound, pause timer, and switch mode
                setSnackbarOpen(true);
                snackbarSound.play();
                handlePause();
                return switchMode();
            }

            tick();

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handlePlay = () => {
        setPaused(false);
        pausedRef.current = false;
    }

    const handlePause = () => {
        setPaused(true);
        pausedRef.current = true;
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway')
            return;

        setSnackbarOpen(false);
    };

    return (
        <div className={classes.root}>
            <Box className={classes.timerBox} >
                {paused
                    ? <IconButton className={classes.smallIcon} onClick={handlePlay}>
                        <PlayArrowIcon />
                    </IconButton>
                    : <IconButton className={classes.smallIcon} onClick={handlePause}>
                        <PauseIcon />
                    </IconButton>
                }
                <p className={classes.text}>{minutes}:{seconds}</p>
                <p className={classes.text}>{modeRef.current.toUpperCase()}</p>

                <Button className={classes.button} variant="outlined" onClick={twentyFiveFive}>25/5</Button>
                <Button className={classes.button} variant="outlined" onClick={fortyFiveFifteen}>45/15</Button>
                <p className={classes.text}>&emsp;&emsp;TOTAL: {totalH}H {totalM}M</p>
                <Button className={classes.button} variant="outlined" onClick={saveTotalTime}>Save Time</Button>
            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Timer has reset!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </div>
    );
}

export default TimerPanel;
