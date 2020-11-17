import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: theme.palette.info.main
  }
}));

function Header() {
  const classes = useStyles();

  const items = [
    "Ώρες",
    "14:10 - 14:40",
    "14:50 - 15:20",
    "15:30 - 16:00",
    "16:10 - 16:40",
    "16:50 - 17:20"
  ].map((item) => 
    <Grid item>
      <Paper className={classes.header} elevation={3}>
        <Typography>{item}</Typography>
      </Paper>
    </Grid>
  );

  return (
    <Grid container direction="column" alignItems="stretch" item xs={2} spacing={3}>
      {items}
    </Grid>
  );

}


function Day(props) {
  const classes = useStyles();

  const lessons = props.lessons.map((lesson) =>
    <Grid item>
      <Paper className={classes.paper}>
        <Typography>
          <Link href={'https://minedu-primary.webex.com/meet/' + lesson.teacher} target="_blank" rel="noopener">
            {lesson.name}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );

  return (
    <Grid container direction="column" alignItems="stretch" item xs={2} spacing={3}>
      <Grid item>
        <Paper className={classes.header} elevation={3}>
          <Typography>{props.name}</Typography>
        </Paper>
      </Grid>
      {lessons}
    </Grid>
  );
}

export default function Calendar(props) {
  const classes = useStyles();
  const days = props.schedule.days.map((day) => 
    <Day {...day} />
  );

  return (
    <div className={classes.root}>
      <Grid container alignItems="stretch" spacing={3}>
        <Header />
        {days}
      </Grid>
    </div>
  );
}

