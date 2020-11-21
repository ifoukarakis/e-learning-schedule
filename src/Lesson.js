import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles((theme) => ({
  highlighted: {
    backgroundColor: theme.palette.info.light
  }
}));

export default function Lesson(props) {
  const classes = useStyles();
  const highlighted = props.lesson.highlighted ? classes.highlighted : null;
  
  return (
    <TableCell align="center" className={highlighted}>
      <Link href={'https://minedu-primary.webex.com/meet/' + props.lesson.teacher} target="_blank" rel="noopener">
        {props.lesson.name}
      </Link>
    </TableCell>
  );
}