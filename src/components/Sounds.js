import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import SoundTrack from './SoundTrack'

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: '50%',
    width: '100%',
    height: '330px',
    background: props => props.webtheme.color + '80',
    display: 'flex',
    // flexDirection: 'row',
  },
}));

function Sounds(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div>
        <SoundTrack name="Beach" source="https://github.com/sarahli10/merodii-audio/blob/master/Beach.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="City" source="https://github.com/sarahli10/merodii-audio/blob/master/City.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="Crickets" source="https://github.com/sarahli10/merodii-audio/blob/master/Crickets.mp3?raw=true" webtheme={props.webtheme} />
      </div>
      <div>
        <SoundTrack name="Fireworks" source="https://github.com/sarahli10/merodii-audio/blob/master/Fireworks.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="Fountain" source="https://github.com/sarahli10/merodii-audio/blob/master/Fountain.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="Furin" source="https://github.com/sarahli10/merodii-audio/blob/master/Furin.mp3?raw=true" webtheme={props.webtheme} />
      </div>
      <div>
        <SoundTrack name="Rain 1" source="https://github.com/sarahli10/merodii-audio/blob/master/Rain1.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="Rain 2" source="https://github.com/sarahli10/merodii-audio/blob/master/Rain2.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="Rain 3" source="https://github.com/sarahli10/merodii-audio/blob/master/Rain3.mp3?raw=true" webtheme={props.webtheme} />
      </div>
      <div>
        <SoundTrack name="Rain 4" source="https://github.com/sarahli10/merodii-audio/blob/master/Rain4.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="River" source="https://github.com/sarahli10/merodii-audio/blob/master/River.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="Rustling Leaves" source="https://github.com/sarahli10/merodii-audio/blob/master/RustlingLeaves.mp3?raw=true" webtheme={props.webtheme} />
      </div>
      <div>
        <SoundTrack name="Summer Cicadas" source="https://github.com/sarahli10/merodii-audio/blob/master/SummerCicadas.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="Waterfall" source="https://github.com/sarahli10/merodii-audio/blob/master/Waterfall.mp3?raw=true" webtheme={props.webtheme} />
        <SoundTrack name="Wind" source="https://github.com/sarahli10/merodii-audio/blob/master/Wind.mp3?raw=true" webtheme={props.webtheme} />
      </div>
    </div>
  );
}

export default Sounds;