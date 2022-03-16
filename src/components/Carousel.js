import React, { useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
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
  },
  contain: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // position: "relative",
    paddingTop: 20,
    "& > span": {
      position: "absolute",
      transform: "translateY(-50%)",
      height: "30px",
      width: "30px",
      borderRadius: "2px",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      zIndex: "1",
    },
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 35,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    paddingLeft: 15,
    display: "-webkit-inline-box",
    whiteSpace: "nowrap",
    overflow: "auto",
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

  const nextPage = () => {
    galleryScrollerRef.current.scrollBy(
      galleryScrollerRef.current.offsetWidth - 15,
      0
    );
  };

  const prevPage = () => {
    galleryScrollerRef.current.scrollBy(
      -(galleryScrollerRef.current.offsetWidth - 15),
      0
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.contain}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
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
            <div style={{ height: "100% !important" }}>
              <ItemView item={item} />
            </div>
          ))}
        </div>
        <span style={{ left: 0, top: "50%" }} onClick={prevPage}>
          <IconButton style={{ color: "red" }}>
            <ArrowBackIosIcon />
          </IconButton>
        </span>
        <span style={{ right: 0, top: "50%" }} onClick={nextPage}>
          <IconButton style={{ color: "red" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default Slider;
