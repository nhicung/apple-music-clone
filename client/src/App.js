import * as React from 'react';
import Loader from './components/Loader';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from './theme';
import Navigation from './components/Navigation';
import Routes from './routes';
import ProfileMenu from './components/ProfileMenu';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

const drawerWidth = 260;

function App() {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    console.log('test');
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch('/users')
      .then((res) => res.json())
      .then((users) => console.log(users));
  }, []);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener('load', handleLoading);
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  return !isLoading ? (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <Navigation handleOpen={toggleOpen} />
          <ProfileMenu open={open} onClose={handleClose} />
        </div>
        <Box
          display='flex'
          justifyContent='center'
          sx={{
            width: {
              xs: '100%',
              md: `calc(100% - ${drawerWidth}px)`,
            },
            ml: { xs: 0, md: `${drawerWidth}px` },
          }}
        >
          <Routes />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  ) : <Loader/>;
}

export default App;
