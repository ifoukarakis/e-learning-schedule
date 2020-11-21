import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Calendar from './Calendar';
import Links from './Links';
import schedule from './data/schedule.json';

const TIMESLOTS = [
  ["14:10", "14:40"],
  ["14:50", "15:20"],
  ["15:30", "16:00"],
  ["16:10", "16:40"],
  ["16:50", "17:20"]
];

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container direction="column">
        <Grid item>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Εβδομαδιαίο ωρολόγιο πρόγραμμα τηλεκπαίδευσης
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Calendar schedule={schedule} timeslots={TIMESLOTS} />
        </Grid>
        <Grid item>
          <Links links={schedule.links} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
