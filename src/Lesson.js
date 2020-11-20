import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import TableCell from '@material-ui/core/TableCell';

import { withinTimeslot } from './helpers';
import { fontWeight } from '@material-ui/system';


const styles = theme => ({
  highlighted: {
    backgroundColor: theme.palette.info.light,
  }
});

class Lesson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          highlighted: withinTimeslot(this.props.day, this.props.timeslot)
        };
    }

    componentDidMount() { 
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    componentWillUnmount() { 
      clearInterval(this.timerID);
    }

    
    tick() {
      this.setState({
        highlighted: withinTimeslot(this.props.day, this.props.timeslot)
      });  
    }

    render() {
      const { classes } = this.props;
      const highlighted = this.state.highlighted ? classes.highlighted : null;
          
      return (
        <TableCell align="center" className={highlighted}>
          <Link href={'https://minedu-primary.webex.com/meet/' + this.props.lesson.teacher} target="_blank" rel="noopener">
            {this.props.lesson.name}
          </Link>
        </TableCell>
      );
    }
      
}

export default withStyles(styles, { withTheme: true })(Lesson);
