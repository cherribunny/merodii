import React from 'react';
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
    quote: {
        marginTop: '50px',
        textAlign: 'center',
        color: props => props.webtheme.textColor,
        // fontSize: '18px',
        fontSize: "clamp(0.5rem, 1.7vw, 1.2rem)",
        textShadow: props => '3px 3px 3px' + props.webtheme.color
    },
    author: {
        color: props => props.webtheme.textColor,
        textAlign: 'center',
        // fontSize: '20px',
        fontSize: "clamp(0.5rem, 1.7vw, 1.2rem)",
        textShadow: props => '3px 3px 3px ' + props.webtheme.color
    }
}));

function Home(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            {/* header */}
            <Header webtheme={props.webtheme} />

            {/* center text */}
            <div>
                <CenterText text={"Merodii"} webtheme={props.webtheme} fontSize={"clamp(1rem, 7vw, 4.5rem)"}/>
                <CenterText text={"メロディイ"} webtheme={props.webtheme} fontSize={"clamp(0.5rem, 5vw, 3.2rem)"} fontFamily="Noto Sans JP"/>
                <p className={classes.quote}>
                    {props.webtheme.quote}
                </p>
                <p className={classes.author}>
                    {props.webtheme.author}
                </p>
            </div>
        </div>
    );
}

export default Home;
