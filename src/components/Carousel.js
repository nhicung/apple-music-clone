import React, { useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  ImageList,
  ImageListItem,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 50,
    // "& > span": {
    //   position: "absolute",
    //   transform: "translateY(-50%)",
    //   height: "30px",
    //   width: "30px",
    //   borderRadius: "2px",
    //   backgroundPosition: "50% 50%",
    //   backgroundRepeat: "no-repeat",
    //   zIndex: "1",
    // },
  },
  contain: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    position: "relative",
    paddingTop: 20,
    "&:hover": {
      cursor: "pointer",
      "& $arrow": {
        transform: "translate3d(0,0,50px)",
        opacity: 1,
      },
    },
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 35,
  },
  arrow: {
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    position: "absolute",
    top: "50%",
    opacity: 0,
    transition: " 0.3s ease-in",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    paddingLeft: 15,
    display: "-webkit-inline-box",
    whiteSpace: "nowrap",
    overflow: "auto",
    gridRow: 1,
    scrollBehavior: "smooth"
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  musicWrapper: {
    overflow: "hidden",
  },
}));

const Slider = ({ itemList, itemView }) => {
  const classes = useStyles();
  const galleryScrollerRef = useRef(null);
  const ItemView = itemView;
  // const elem = document.getElementById("item");
  // const rect = elem.getBoundingClientRect();

  // console.log(rect)

  // const inputRef = useRef(null);

  const nextPage = () => {
    galleryScrollerRef.current.scrollBy(
      galleryScrollerRef.current.offsetWidth,
      0
    );
  };

  const prevPage = () => {
    galleryScrollerRef.current.scrollBy(
      -(galleryScrollerRef.current.offsetWidth),
      0
    );
  };

  console.log(nextPage)
  // console.log(inputRef.current.getBoundingClientRect());

  return (
    <div className={classes.root}>
      <div className={classes.contain}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
          spaceBetween={50}
          cssMode={true}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          mousewheel={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {itemList.map((item, idx) => {
            return (
              <SwiperSlide>
                {" "}
                <ItemView item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={classes.contain}>
        <div className={classes.gridList} ref={galleryScrollerRef}>
          {itemList.map((item, idx) => (
            <div>
              <ItemView item={item} />
            </div>
          ))}
        </div>
        <div className={classes.arrow}>
          <div onClick={prevPage}>
            <IconButton size="large">
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <div onClick={nextPage}>
            <IconButton size="large">
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
