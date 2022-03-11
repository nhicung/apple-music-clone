import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import { Button } from '@mui/material';
import GridItem from './components/GridItem'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color='primary'>
        hello
      </Button>
      <GridItem
        media='https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US'
        url='https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US'
        title='Rap Life'
        subTitle='Apple Music Hip-Hop'
      />
    </ThemeProvider>
  );
}

export default App;
