import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
    },
}));

function CenterText(props) {
    const classes = useStyles(props);

    // for text animation
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (

        <Collapse
            in={checked}
            {... (checked ? { timeout: 2000 } : {})}
            collapsedHeight={10}
        >
            <div className={classes.container}>
                <Text style={{
                    fontSize: props.fontSize,
                    fontFamily: props.fontFamily,
                    color: '#FFF',
                    textShadowColor: props.webtheme.color,
                    textShadowRadius: 20,
                    textShadowOffset: {
                        width: 0,
                        height: 0
                    }
                }}>
                    {props.text}
                </Text>
            </div>
        </Collapse>
    );
}

export default CenterText;
