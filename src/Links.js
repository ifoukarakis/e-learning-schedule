import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    orange: {
        backgroundColor: deepOrange[500],
        color: theme.palette.getContrastText(deepOrange[500])
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    medium: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    center: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));


function LinkAvatar(props) {
    const classes = useStyles();
    const theme = useTheme();

    if(!props.link.text || ! props.link.text.trim()) {
        return (null)
    }

    if(!props.link.href || ! props.link.href.trim()) {
        return (null)
    }

    if(props.link.image) {

        const style = props.link.bgColor ? {
            backgroundColor: props.link.bgColor,
            color: theme.palette.getContrastText(props.link.bgColor)
        } : null;
        
        return (<Avatar alt="style" style={style} src={props.link.image} className={classes.medium} variant="rounded" />)
    }
    return (<Avatar className={classNames(classes.orange, classes.medium)}>{props.link.text.trim().substring(0, 1).toUpperCase()}</Avatar>)
    
}

function LabeledIcon(props) {
    const classes = useStyles();

    return(
        <Grid item xs={2}>
            <Link href={props.link.href} target="_blank" rel="noopener" className={classes.center}>
                <Grid container alignItems="center" direction="column">
                    <Grid item>
                        <LinkAvatar link={props.link} />
                    </Grid>
                    <Grid item>
                        {props.link.text}
                    </Grid>
                </Grid>
            </Link>
        </Grid>
    )
}

export default function Links(props) {
    if(!props.links) {
        return (null)
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            {
                props.links.map((link, index) => <LabeledIcon link={link} key={"link-" + index} />)
            }
        </Grid>
    );
}