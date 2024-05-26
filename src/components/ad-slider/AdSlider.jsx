import "./AdSlider.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y, EffectFade } from "swiper/modules"
import { IoIosArrowBack } from "react-icons/io"
import "swiper/css/effect-fade"

const AdSlider = () => {
  return (
    <div className="adSlider">
      <Swiper
        modules={[Navigation, A11y, EffectFade]}
        slidesPerView={1}
        navigation={{
          prevEl: ".adSlider_prev",
          nextEl: ".adSlider_next",
        }}
        effect="fade"
        speed={500}
        loop={true}
        breakpoints={{}}
      >
        <SwiperSlide className="adSlider-slide">
          <div className="adSlider_left">
            <h4>Ko’zi ojizlar uchun Quron kurslari ochilmoqda!</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="left_bottom">
              <button id="more">Batafsil</button>
              <div className="buttons">
                <button className="adSlider_prev btn">
                  <IoIosArrowBack />
                </button>
                <button className="adSlider_next btn">
                  <IoIosArrowBack />
                </button>
              </div>
            </div>
          </div>
          <div className="adSlider_right">
            <img src="/images/Rectangle 106.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="adSlider-slide">
          <div className="adSlider_left">
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
            <div className="left_bottom">
              <button id="more">Batafsil</button>
              <div className="buttons">
                <button className="adSlider_prev btn">
                  <IoIosArrowBack />
                </button>
                <button className="adSlider_next btn">
                  <IoIosArrowBack />
                </button>
              </div>
            </div>
          </div>
          <div className="adSlider_right">
            <img src="/images/Rectangle 12.png" alt="there should be image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AdSlider
