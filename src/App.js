import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Calendar from './Calendar';
import schedule from './data/schedule.json';

function App() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Εβδομαδιαίο ωρολόγιο πρόγραμμα τηλεκπαίδευσης
        </Typography>
      </Box>
      <Calendar schedule={schedule}/>
    </Container>
  );
}

export default App;
