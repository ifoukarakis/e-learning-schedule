import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Calendar from './Calendar';
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
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Εβδομαδιαίο ωρολόγιο πρόγραμμα τηλεκπαίδευσης
        </Typography>
      </Box>
      <Calendar schedule={schedule} timeslots={TIMESLOTS} />
    </Container>
  );
}

export default App;
