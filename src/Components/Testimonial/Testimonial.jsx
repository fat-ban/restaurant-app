//icons
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

import { FaQuoteLeft } from "react-icons/fa";
//images
import testimonialbg from "../../assets/testimonialbg.jpg";

import { testimonialPhoto } from "../../DataImg";
import "./Testimonial.css";
//swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Scrollbar,
  A11y,
} from "swiper/modules";

const Testimonial = () => {
  return (
    <section
      className="testimonial-section w-100 "
      style={{
        // height: "80vh",
        backgroundImage: `url(${testimonialbg})`,
        //height:"100vh",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <div className="container my-5">
        <div className="row">
          <h1
            className=" main-title-test text-center "
            style={{
              fontSize: "4rem",
              zIndex: "1",
              fontWeight: "600",
              marginTop: "50px",
            }}
          >
            Testimonial
          </h1>
          <div className="col ">
            <div className="container">
              <Swiper
                cssMode={true}
                navigation={{
                  nextEl: ".button-next-slide",
                  prevEl: ".button-prev-slide",
                }}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                  Scrollbar,
                  A11y,
                ]}
                className="mySwiper w-100 mt-5  "
                style={{
                  zIndex: "1",
                  backgroundColor: "trasparent",
                  height: "450px",
                }}
              >
                {testimonialPhoto.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="carousel-img my-3">
                        <img src={item.url} alt="..." />
                      </div>
                      <div className="carousel-caption">
                        <h5 className="testimonial-name">{item.name}</h5>
                        <p>
                          <FaQuoteLeft className="testimonial-icon" />
                          Etiam porta sem malesuada magna mollis euismod.
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Cras mattis consectetur purus
                          sit amet fermentum. Curabitur blandit tempus.
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className="button-next-slide ">
                  <MdOutlineArrowForwardIos
                    style={{ fontSize: "65px", color: "#fff" }}
                  />
                </div>
                <div className="button-prev-slide ">
                  <MdOutlineArrowBackIos
                    style={{ fontSize: "65px", color: "#fff" }}
                  />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
