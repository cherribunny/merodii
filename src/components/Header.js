import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { NavLink } from "react-router-dom";

// material-ui icons
import HomeIcon from '@mui/icons-material/Home';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

const useStyles = makeStyles((theme) => ({
    header: {
        background: props => props.webtheme.color + '99',   // 60% transparent
        // height: '70px',
        height: 'clamp(4rem, 3vw, 4.5rem)',
    },
    headerTitle: {
        flexGrow: '1',
        // clamp helps typography become repsonsive
        fontSize: 'clamp(1rem, 3vw, 2rem)',
        color: '#FFF',
    },
    headerLinks: {
        color: '#FFF',
        // fontSize: '18px',
        fontSize: 'clamp(0.7rem, 2.2vw, 1.3rem)',
        justifyContent: 'center',
        // marginLeft: '30px',
        marginLeft: 'clamp(0.5rem, 0.5vw, 1.5rem)',
        paddingRight: '15px',
        "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: "none", // get rid of underline
        },
        "&:hover": {
            background: props => props.webtheme.color,
            borderRadius: '15px',
        }
    },
    headerWrapper: {
        width: '90%',
        margin: '0 auto',
    },
    smallIcon: {
        color: '#fff',
        "& svg": {
            fontSize: 'clamp(0.7rem, 2.2vw, 1.3rem)',
        },
    },
}));

function Header(props) {
    const classes = useStyles(props);

    return (
        <AppBar className={classes.header} elevation={0} >
            <Toolbar className={classes.headerWrapper}>
                <h1 className={classes.headerTitle}>
                    Merodii
                </h1>

                <NavLink to="/" className={classes.headerLinks}>
                    <IconButton className={classes.smallIcon}>
                        <HomeIcon />
                    </IconButton>
                    Home
                </NavLink>

                <NavLink to="/themes" className={classes.headerLinks}>
                    <IconButton className={classes.smallIcon}>
                        <ImageOutlinedIcon />
                    </IconButton>
                    Themes
                </NavLink>

                <NavLink to="/quotes" className={classes.headerLinks}>
                    <IconButton className={classes.smallIcon}>
                        <FormatQuoteIcon />
                    </IconButton>
                    Quotes
                </NavLink>

                <NavLink to="/todo" className={classes.headerLinks}>
                    <IconButton className={classes.smallIcon}>
                        <FactCheckOutlinedIcon />
                    </IconButton>
                    To-Do
                </NavLink>

            </Toolbar>
        </AppBar >
    );
}

export default Header;
