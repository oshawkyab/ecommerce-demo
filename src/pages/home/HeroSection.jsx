// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-content">
                <h4>Introducing The New</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller
                </h3>
                <p>Windows XP/7/8/9/10, PS3, Tv, Xbox</p>
                {/* // TODO :: Will  add href for the image */}
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero1.jpg" alt="slider-hero-1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <h4>Introducing The New</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller
                </h3>
                <p>Windows XP/7/8/9/10, PS3, Tv, Xbox</p>
                {/* // TODO :: Will  add href for the image */}
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero2.jpg" alt="slider-hero-1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <h4>Introducing The New</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller
                </h3>
                <p>Windows XP/7/8/9/10, PS3, Tv, Xbox</p>
                {/* // TODO :: Will  add href for the image */}
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero3.jpg" alt="slider-hero-1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
