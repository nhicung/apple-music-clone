import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import { Button } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color='primary'>
        hello
      </Button>
    </ThemeProvider>
  );
}

export default App;
