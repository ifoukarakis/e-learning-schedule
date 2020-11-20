import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: theme.palette.info.main
  },
  table: {
    minWidth: 650,
  }
}));

const TIMESLOTS = [
  "14:10 - 14:40",
  "14:50 - 15:20",
  "15:30 - 16:00",
  "16:10 - 16:40",
  "16:50 - 17:20"
];

const zip = (a, b) => a.map((k, i) => [k, b[i]]);
const transpose = m => m[0].map((x,i) => m.map(x => x[i]));

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function Calendar(props) {
  const classes = useStyles();
  
  const lessonsPerHour = transpose(props.schedule.days.map((day) => day.lessons));


  return  (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="timetable">
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}/>
            {
              props.schedule.days.map((day) =>
                <TableCell align="center" className={classes.header} key={day.name}>
                  <Typography variant="h6">{day.name}</Typography>
                </TableCell>
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {zip(TIMESLOTS, lessonsPerHour).map((item) => (
            <StyledTableRow key={item[0]}>
              <TableCell component="th" scope="row">
                <Typography variant="h6">{item[0]}</Typography>
              </TableCell>
              {item[1].map((lesson, index) => 
                <TableCell align="center" key={props.schedule.days[index].name + "-" + item[0]}>
                  <Link href={'https://minedu-primary.webex.com/meet/' + lesson.teacher} target="_blank" rel="noopener">
                    {lesson.name}
                  </Link>
                </TableCell>)}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
