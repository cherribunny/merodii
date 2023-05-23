import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import webthemes from '../static/webthemes'

// react-perfect-scrollbar
// https://www.npmjs.com/package/react-perfect-scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        paddingTop: '100px'
    },
    textArea: {
        height: '750px',
        padding: '20px 40px 20px 40px',
        borderRadius: '15px',
        // overflowY: 'scroll',  // don't need this if using react-perfect-scrollbar
        fontSize: '16px',
        color: props => props.webtheme.textColor,
        background: props => props.webtheme.color + '90',
    }
}));

function QuotesPage(props) {
    const classes = useStyles(props);

    const displayData = webthemes.map(
        (item) => {
            return (
                <p>★ {item.quote}&emsp;{item.author}</p>
            )
        }
    )

    return (
        <div className={classes.root}>
            <Header webtheme={props.webtheme} />
            <div className={classes.textArea}>
                <PerfectScrollbar>
                    {displayData}
                </PerfectScrollbar>
            </div>
        </div >);
}

export default QuotesPage;