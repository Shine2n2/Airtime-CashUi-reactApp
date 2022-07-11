import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
SwiperCore.use([Navigation]);
const data = [
  {
    Id: 1,
    Name: "Biodun Adebola",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },

  {
    Id: 2,
    Name: "Tobias Johnson",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },

  {
    Id: 3,
    Name: "Lawrence Smith",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },

  {
    Id: 4,
    Name: "Chika Nwosu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
  {
    Id: 4,
    Name: "Azzez Musty",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
];
const Testimonial = () => {
  return (
    <Swiper
      className="testimonial__wrapper"
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((user) => {
        return (
          <SwiperSlide key={user.Id}>
            <div className="testimonial__container">
              <div className="testimonial">
                <h3>{user.Name}</h3>
                <p>{user.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
