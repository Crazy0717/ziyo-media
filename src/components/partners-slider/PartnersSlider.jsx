import "./PartnersSlider.scss"
import { IoIosArrowBack } from "react-icons/io"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper/modules"

const PartnersSlider = ({title}) => {
  return (
    <div className="partnersSlider">
      <div className="partnersSlider_top">
        <h2>{title}</h2>
        <div className="buttons">
          <button className="partnersSlider_prev btn">
            <IoIosArrowBack />
          </button>
          <button className="partnersSlider_next btn">
            <IoIosArrowBack />
          </button>
        </div>
      </div>
      <div className="partnersSlider_content">
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={4}
          navigation={{
            prevEl: `.partnersSlider_prev`,
            nextEl: `.partnersSlider_next`,
          }}
          spaceBetween={10}
          speed={400}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1.5,
            },
            600: {
              slidesPerView: 2,
            },
            730: {
              slidesPerView: 2.5,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1400: {
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="partnersBox">
              <div className="partnersBox_top">
                <img src="/images/MTRK 1.png" alt="" />
              </div>
              <div className="partnersBox_bottom">
                <p>Lorem ipsum kompaniyasi</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partnersBox">
              <div className="partnersBox_top">
                <img src="/images/MTRK 1.png" alt="" />
              </div>
              <div className="partnersBox_bottom">
                <p>Lorem ipsum kompaniyasi</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partnersBox">
              <div className="partnersBox_top">
                <img src="/images/MTRK 1.png" alt="" />
              </div>
              <div className="partnersBox_bottom">
                <p>Lorem ipsum kompaniyasi</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partnersBox">
              <div className="partnersBox_top">
                <img src="/images/MTRK 1.png" alt="" />
              </div>
              <div className="partnersBox_bottom">
                <p>Lorem ipsum kompaniyasi</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partnersBox">
              <div className="partnersBox_top">
                <img src="/images/MTRK 1.png" alt="" />
              </div>
              <div className="partnersBox_bottom">
                <p>Lorem ipsum kompaniyasi</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default PartnersSlider
