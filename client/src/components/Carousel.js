import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button } from "@mui/material/";
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
        paddingTop: 10,
        paddingBottom: 10,
        borderBottom: "0.5px solid rgba(0,0,0,0.15)",
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
        padding: "0 15px",
        transform: "translate3d(0,0,50px)",
        "& .swiper-button-prev, .swiper-button-next": {
            opacity: 0,
            top: ({ top }) => top,
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

const Slider = ({ itemList, itemView, header, cols, seeAll, top }) => {
    const classes = useStyles({ top });
    const ItemView = itemView;

    if (itemList.length === 0) {
        return <></>;
    }
    return (
        <div className={classes.root}>
            <div className={classes.contain}>
                {seeAll ? (
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            alignItems: "flex-end",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "17px",
                                lineHeight: 1.17649,
                                fontWeight: 700,
                                letterSpacing: 0,
                                mb: "6px",
                                width: "100%",
                                paddingLeft: "25px",
                            }}
                        >
                            {header}
                        </Typography>
                        <div
                            style={{
                                width: "100%",
                                justifyContent: "flex-end",
                                display: "flex",
                            }}
                        >
                            <Button
                                variant="text"
                                size="medium"
                                sx={{
                                    textTransform: "none",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        fontWeight: 400,
                                        display: "flex",
                                        alignItems: "center",
                                        color: "secondary.main",
                                    }}
                                >
                                    See All
                                </Typography>
                            </Button>
                        </div>
                    </div>
                ) : null}
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
                    slidesPerView={cols}
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
