import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import theme from "./theme";
import GridItem1 from "./components/GridItem1";
import GridItem2 from "./components/GridItem2";
import GridItem3 from "./components/GridItem3";
import GridItem4 from "./components/GridItem4";
import Carousel from "./components/Carousel";
import GridList from "./components/GridList";
import Navigation from "./components/Navigation";
import PlaylistHeader from "./components/PlaylistHeader";
import SongList from "./components/SongList";
import Footer from "./components/Footer"
import data from "./MockData";

const drawerWidth = 260;

function App() {
  const item1 = {
    title: "Rap Life",
    subtitle: "Apple Music Hip-Hop",
    media:
      "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
    url: "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/71/f4/87/71f4876f-639b-61db-bcc6-a27d161c7fb3/U0MtTVMtV1ctUmFwTGlmZV9QbGF5bGlzdC1MaWxfRHVyay1BREFNX0lEPTEwMDQ3ODkxMjIucG5n.png/456x456SC.DN01.webp?l=en-US",
  };
  const item2 = {
    media:
      "https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/93/e2/bc/93e2bc04-89d6-2ee0-f618-ebebb497324f/U0gtTVMtV1ctTk1ELVByb3llY3RfSG90X0dpcmwtQURBTV9JRD0xMDUzMTY1ODU3LnBuZw.png/1200x688sr.webp",
    url: "https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/93/e2/bc/93e2bc04-89d6-2ee0-f618-ebebb497324f/U0gtTVMtV1ctTk1ELVByb3llY3RfSG90X0dpcmwtQURBTV9JRD0xMDUzMTY1ODU3LnBuZw.png/1200x688sr.webp",
    subTitle:
      "Megan Thee Stallion and Dua Lipa team up for “Sweetest Pie,” in Spatial Audio.",
    subHead: "Updated Playlist",
    line1: "New Music Dua",
    line2: "Apple Music Hits",
  };
  const item3 = {
    media:
      "https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/7c/6c/6b/7c6c6bfe-fa30-7d1b-acb2-c3d3d0a9507b/source/580x326sr.webp",
    url: "https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/7c/6c/6b/7c6c6bfe-fa30-7d1b-acb2-c3d3d0a9507b/source/580x326sr.webp",
    title: "The Global Chart Show with Brooke Reese",
  };
  const item4 ={
    title:"Browse by Category"
  }
  const playlistHeader = {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/2a/85/e3/2a85e3b4-5503-29fa-ca4d-f6afd9a98f1c/Job14d62ca2-3fc9-4292-a4f8-54dbb0859c94-108238143-PreviewImage_PreviewImageIntermediate_preview_image_nonvideo-Time1607894324638.png/540x540cc.webp",
    imageLayer:
      "https://is3-ssl.mzstatic.com/image/thumb/Features114/v4/24/12/9b/24129b24-6f0e-6c28-22d2-cbc248cc0a32/U0RTLU1TLVdXLUFsaXN0UG9wLUFEQU1fSUQ9MTAwNDc3NjIwMi5wbmc.png/44x44br-60.jpg",
    title: "A-List Pop",
    category: "Apple Music Pop",
    subtitle: "updated yesterday",
    description:
      "“I think the song really shows off my honesty but also my energy,” Shawn Mendes tells Apple Music of “When You're Gone,” the new single that headlines A-List Pop this week. Originally written as a ballad on piano, it’s now a guitar-driven anthem, the Canadian singer-songwriter belting his way through a picture of love lost too soon. “Playing live shows is what I live for,” he says, “and this song was born to be played onstage.” Add A-List Pop to your library to stay up on the latest and greatest pop music.",
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navigation />
      </div>
      <Container
        display="flex"
        justifyContent="center"
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
          <GridItem3 item={item3} titlePosition="atBottom" />
        </div>
        <div>
          <GridItem3 item={item3} titlePosition="layOnTop" />
        </div>
        <div>
          <GridItem4 item={item4} />
        </div>
        <div>
          <Carousel itemList={data} itemView={GridItem1} />
        </div>
        <div>
          <GridList itemList={data} itemView={GridItem1} col={3} />
        </div>
      </Container>
      <div
        style={{
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          padding: "40px",
        }}
      >
        <PlaylistHeader item={playlistHeader} />
        <SongList />
      </div>
      <div
                style={{
                    marginLeft: `${drawerWidth}px`,
                    background: "#fbfbfb",
                }}
            >
                <Footer />
            </div>
    </ThemeProvider>
  );
}

export default App;
