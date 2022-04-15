import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import theme from './theme';
import GridItem1 from './components/GridItem1';
import GridItem2 from './components/GridItem2';
import GridItem3 from './components/GridItem3';
import Carousel from './components/Carousel';
import Navigation from './components/Navigation';
import data from './MockData';
import Footer from './components/Footer';

const drawerWidth = 260;

function App() {
    const item1 = {
        title: 'Rap Life',
        subtitle: 'Apple Music Hip-Hop',
        media: 'https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US',
        url: 'https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US',
    };
    const item2 = {
        media: 'https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/93/e2/bc/93e2bc04-89d6-2ee0-f618-ebebb497324f/U0gtTVMtV1ctTk1ELVByb3llY3RfSG90X0dpcmwtQURBTV9JRD0xMDUzMTY1ODU3LnBuZw.png/1200x688sr.webp',
        url: 'https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/93/e2/bc/93e2bc04-89d6-2ee0-f618-ebebb497324f/U0gtTVMtV1ctTk1ELVByb3llY3RfSG90X0dpcmwtQURBTV9JRD0xMDUzMTY1ODU3LnBuZw.png/1200x688sr.webp',
        subTitle:
            'Megan Thee Stallion and Dua Lipa team up for “Sweetest Pie,” in Spatial Audio.',
        subHead: 'Updated Playlist',
        line1: 'New Music Dua',
        line2: 'Apple Music Hits',
    };
    const item3 = {
        media: 'https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/7c/6c/6b/7c6c6bfe-fa30-7d1b-acb2-c3d3d0a9507b/source/580x326sr.webp',
        url: 'https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/7c/6c/6b/7c6c6bfe-fa30-7d1b-acb2-c3d3d0a9507b/source/580x326sr.webp',
        title: 'The Global Chart Show with Brooke Reese',
    };
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navigation />
            </div>
            <Container
                display='flex'
                justifyContent='center'
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
                <div>
                    <GridItem1 item={item1} />
                </div>
                <div>
                    <GridItem2 item={item2} />
                </div>
                <div>
                    <GridItem3 item={item3} />
                </div>
                <div>
                    <Carousel itemList={data} itemView={GridItem1} />
                </div>
            </Container>
            <div
                style={{
                    marginLeft: `${drawerWidth}px`,
                    background: '#fbfbfb',
                }}
            >
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
