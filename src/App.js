import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import theme from "./theme";
import GridItem1 from "./components/GridItem1";
import GridItem2 from "./components/GridItem2";
import GridItem3 from "./components/GridItem3";
import GridItem4 from "./components/GridItem4";
import Carousel from "./components/Carousel";
import Navigation from "./components/Navigation";
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
  const item5 = {
    media:
      "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/f1/aa/98/f1aa980c-00c9-7dfd-f1b6-7f061620bbee/Job33d52212-ce33-4130-91aa-cc08079c6422-108154974-PreviewImage_PreviewImageIntermediate_preview_image_nonvideo-Time1607024451977.png/1200x688sr-60.jpg",
    url: "",
    title: "Music 1",
    subtitle:"The new music that matters.",
    schedule:"LIVE · 10AM - 12PM",
    event:"The Apple Music 1 List",
    description:"Hear our current obsessions and new discoveries making waves.",
    background:"https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/f1/aa/98/f1aa980c-00c9-7dfd-f1b6-7f061620bbee/Job33d52212-ce33-4130-91aa-cc08079c6422-108154974-PreviewImage_PreviewImageIntermediate_preview_image_nonvideo-Time1607024451977.png/88x50br-60.jpg"
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
          <GridItem3 item={item3} />
        </div>
        <div>
          <GridItem4 item={item5} />
        </div>
        <div>
          <Carousel itemList={data} itemView={GridItem1} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
