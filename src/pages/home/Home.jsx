import "./Home.scss"
import { Navigation, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { IoIosArrowBack } from "react-icons/io"
import { VideoPlayer } from "../../ui"
import {
  AdSlider,
  ContactUs,
  NewsBlock,
  PartnersSlider,
  QuadSlider,
  RadioSlider,
} from "../../components"

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
          modules={[Navigation, A11y]}
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
              <VideoPlayer videoUrl="https://www.youtube-nocookie.com/embed/HO-r634Sq98?si=qIE5yRGBev1AwOAc" />
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
              <VideoPlayer videoUrl="https://www.youtube-nocookie.com/embed/lppnmJDlAVg?si=r1JJzsp5f5m3Pvox" />
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
      <NewsBlock />
      <QuadSlider ident="first" title="Imom al buxoriy saboqlari" />
      <AdSlider />
      <RadioSlider />
      <QuadSlider ident="second" title="Qiziq bo’lishi mumkin" />
      <QuadSlider ident="third" title="Audio maxsulotlar" />
      <PartnersSlider />
      <ContactUs />
    </div>
  )
}

export default Home
