import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ReactAudioPlayer from "react-audio-player";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    margin: '15px 0px 0px 15px',
    alignItems: 'center',
  }, 
  audioPlayer: {
    alignItems: 'center',
    padding: '10px',
  },
  text: {
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '0px',
    // color: props => props.webtheme.textColor,
    color: '#fff',
  }
}));

function SoundTrack(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <h2 className={classes.text}>{props.name}</h2>
      <ReactAudioPlayer
        className={classes.audioPlayer}
        src={props.source}
        controls
        loop={true}
        volume={0.2}
      />
    </div>
  );
}

export default SoundTrack;