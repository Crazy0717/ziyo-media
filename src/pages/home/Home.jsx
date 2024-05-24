import "./Home.scss"
import { Navigation, Scrollbar, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { IoIosArrowBack } from "react-icons/io"
import { VideoPlayer } from "../../ui"

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="buttons">
          <button className="prev btn">
            <IoIosArrowBack />
          </button>
          <button className="next btn">
            <IoIosArrowBack />
          </button>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: ".next.btn", prevEl: ".prev.btn" }}
          speed={500}
          loop={true}
          breakpoints={{
            0: {
              spaceBetween: 150,
            },
            480: {
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="left">
              <span>Video</span>
              <p>IMOM Al Buxoriy o’g’itlari</p>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <button>Batafsil</button>
            </div>
            <div className="right">
              <VideoPlayer videoUrl="https://www.youtube.com/watch?v=HO-r634Sq98&t=1s" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">
              <span>Video</span>
              <p>IMOM Al Buxoriy o’g’itlari</p>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <button>Batafsil</button>
            </div>
            <div className="right">
              <VideoPlayer videoUrl="https://www.youtube.com/watch?v=lppnmJDlAVg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
      <div className="info">
        <div className="box">
          <h3>
            20<span>+</span>
          </h3>
          Radiolar
        </div>
        <div className="box">
          <h3>
            200<span>+</span>
          </h3>
          Video mahsulotlar
        </div>
        <div className="box">
          <h3>
            232<span>+</span>
          </h3>
          Audio mahsulotlar
        </div>
        <div className="box">
          <h3>
            89<span>+</span>
          </h3>
          Fotolavhalar
        </div>
      </div>
    </div>
  )
}

export default Home
