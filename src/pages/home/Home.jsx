import { Navigation, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { IoIosArrowBack } from "react-icons/io"
import { Counter, VideoPlayer } from "../../ui"
import {
  AdSlider,
  ContactUs,
  NewsBlock,
  PartnersSlider,
  QuadSlider,
  RadioSlider,
} from "../../components"
import { Link } from "react-router-dom"
import "./Home.scss"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation()

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
              <span>{t("badgeVideo")}</span>
              <p>{t("headerRes1")}</p>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <Link to={"/product/video1"}>
                <button>{t("more")}</button>
              </Link>
            </div>
            <div className="right">
              <VideoPlayer videoUrl="https://www.youtube-nocookie.com/embed/HO-r634Sq98?si=qIE5yRGBev1AwOAc" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">
              <span>{t("badgeVideo")}</span>
              <p>{t("headerRes1")}</p>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <Link to={"/product/video1"}>
                <button>{t("more")}</button>
              </Link>
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
            <Counter end={20} interval={45} />
            <span>+</span>
          </h3>
          {t("radios")}
        </div>
        <div className="box">
          <h3>
            <Counter end={200} interval={1} />
            <span>+</span>
          </h3>
          {t("headerVideosCount")}
        </div>
        <div className="box">
          <h3>
            <Counter end={232} interval={1} />
            <span>+</span>
          </h3>
          {t("audioProducts")}
        </div>
        <div className="box">
          <h3>
            <Counter end={89} interval={15} />
            <span>+</span>
          </h3>
          {t("headerPhotosCount")}
        </div>
      </div>
      <NewsBlock title={t("news")} />
      <QuadSlider ident="first" title={t("mainbuxariy1")} />
      <AdSlider />
      <RadioSlider title={t("radios")} btnText={t("seeAll")}/>
      <QuadSlider ident="second" title={t("quadSlider1")} btnText={t("seeAll")}/>
      <QuadSlider ident="third" title={t("audioProducts")} />
      <PartnersSlider title={t("ourPartners")} />
      <ContactUs />
    </div>
  )
}

export default Home
