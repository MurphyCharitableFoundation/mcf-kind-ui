import { Button, Box } from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

export interface CarouselProps {
    items: React.ReactNode[];
    nextIcon: React.ReactNode;
    prevIcon: React.ReactNode;
}

export const Carousel = (props: CarouselProps) => {
    return (
        <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",width: "100%"}}>
            <Button className="custom-prev">
                {props.prevIcon}
            </Button>
            <Swiper
                slidesPerView={1}
                navigation={{
                    enabled: true,
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }} modules={[Navigation]} loop={true}
            >
                {props.items?.map((item,i) => (
                    <SwiperSlide key={`slide-${i}`}>
                        <div key={i}
                             style={{
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                             }}
                        >
                            {item}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Button className="custom-next">
                {props.nextIcon}
            </Button>
        </Box>
    )
};
