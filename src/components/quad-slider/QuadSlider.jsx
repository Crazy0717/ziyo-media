import "./QuadSlider.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper/modules"
import { PrimaryBox } from "../../ui"
import { IoIosArrowBack } from "react-icons/io"

const QuadSlider = ({ title, ident }) => {
  return (
    <div className="quadSlider">
      <div className="quadSlider_top">
        <h2>{title}</h2>
        <button>Barchasini ko’rish</button>
      </div>
      <div className="quadSlider_content">
        <div className="buttons">
          <button id={ident} className="quadSlider_prev btn">
            <IoIosArrowBack />
          </button>
          <button id={ident} className="quadSlider_next btn">
            <IoIosArrowBack />
          </button>
        </div>
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={4}
          navigation={{
            prevEl: `#${ident}`,
            nextEl: `#${ident}`,
          }}
          spaceBetween={10}
          speed={400}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1.5,
            },
            600: {
              slidesPerView: 2,
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
          {mockData &&
            mockData.map((item) => (
              <SwiperSlide key={item.time}>
                <PrimaryBox data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default QuadSlider

const mockData = [
  {
    imagePath: "/images/Rectangle 12.png",
    time: "10:32",
    badge: "video",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "7:11",
    badge: "audio",
  },
  {
    imagePath: "/images/Rectangle 12 (2).png",
    time: "10:48",
    badge: "foto",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "7:42",
    badge: "video",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "22:58",
    badge: "audio",
  },
]
