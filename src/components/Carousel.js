import React from "react";
import { makeStyles } from "@mui/styles";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const useStyles = makeStyles((theme) => ({
    contain: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        position: "relative",
        paddingTop: 20,
        "& .swiper-button-next": {
            right: -10,
        },
        "& .swiper-button-prev": {
            left: -10,
        },
        "&:hover": {
            cursor: "pointer",
            "& .swiper-button-prev, .swiper-button-next": {
                transform: "translate3d(0,0,50px)",
                opacity: 0.85,
            },
            "& .swiper-button-disabled": {
                transform: "translate3d(0,0,50px)",
                opacity: 0,
            },
        },
    },
    swiper: {
        padding: "20px",
        transform: "translate3d(0,0,50px)",
        "& .swiper-button-prev, .swiper-button-next": {
            opacity: 0,
            top: "40%",
            width: "40px",
            height: "40px",
            color: "#000000",
            fontWeight: 200,
            "&::after": {
                fontSize: "28px",
            },
        },
    },
}));

const Slider = ({ itemList, itemView }) => {
    const classes = useStyles();
    const ItemView = itemView;

    return (
        <div className={classes.root}>
            <div className={classes.contain}>
                <Swiper
                    className={classes.swiper}
                    modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Mousewheel,
                    ]}
                    spaceBetween={0}
                    cssMode={true}
                    slidesPerView={5}
                    mousewheel={true}
                    navigation={true}
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
        </div>
    );
};

export default Slider;
