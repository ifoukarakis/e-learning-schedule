import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Lesson from './Lesson';
import { currentTimeslot, transpose, zip } from './helpers';
import { useClock } from './useClock';


const TIMESLOTS = [
  ["14:10", "14:40"],
  ["14:50", "15:20"],
  ["15:30", "16:00"],
  ["16:10", "16:40"],
  ["16:50", "17:20"]
];

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

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }
}))(TableRow);

export default function Calendar(props) {
  const classes = useStyles();
  const time = useClock();
  
  const dayNames = props.schedule.days.map((day) => day.name);
  const lessonsPerTimeslot = transpose(props.schedule.days.map((day) => day.lessons));

  console.log(time)
  const curTimeslot = currentTimeslot(time, TIMESLOTS);

  const rows = zip(TIMESLOTS, lessonsPerTimeslot).map(([timeslot, lessons]) => {
    return {
      timeslot,
      lessons: lessons.map((lesson, index) => {
          return {
            ...lesson,
            highlighted: (index + 1 === time.day()) && (timeslot === curTimeslot)
          }
        })
      }
    });


  return  (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="timetable">
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}/>
            {
              dayNames.map((day) =>
                <TableCell align="center" className={classes.header} key={day}>
                  <Typography variant="h6">{day}</Typography>
                </TableCell>
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={"row-" + index}>
              <TableCell component="th" scope="row">
                <Typography variant="h6">{row.timeslot[0]} - {row.timeslot[1]}</Typography>
              </TableCell>
              {row.lessons.map((lesson, lessonIndex) => 
                <Lesson key={"lesson-" + index + "-" + lessonIndex} lesson={lesson} />
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
