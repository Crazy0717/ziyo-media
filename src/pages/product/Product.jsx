import { useEffect, useState } from "react"
import "./Product.scss"
import { Link, useParams } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6"
import {
  IoCalendarClearOutline,
  IoChatboxEllipsesOutline,
  IoEyeOutline,
} from "react-icons/io5"
import { SlLike } from "react-icons/sl"
import { AsideBar, PrayerTimes } from "../../components"
import { AudioPlayer, VideoPlayer } from "../../ui"
import { HiOutlineEnvelope } from "react-icons/hi2"

const Product = () => {
  const { id } = useParams()
  const [data, setData] = useState()

  useEffect(() => {
    switch (id) {
      case "ad1":
        setData(ad1)
        break
      case "us-purchases":
        setData(usPurchases)
        break
      case "policy":
        setData(privacyAndPolicy)
        break
      case "about-ziyo":
        setData(aboutZiyo)
        break
      case "people1":
        setData(people1)
        break
      case "video1":
        setData(video1)
        break
      case "audio1":
        setData(audio1)
        break
      case "photo1":
        setData(photo1)
        break
    }
    scrollTo({
      top: 100,
    })
  }, [id])

  return (
    <div className="product">
      <div className="product_left">
        <div className="product_left_top">
          <Link to={"/"}>
            <button>
              <FaArrowLeftLong id="icon" />
              Orqaga qaytish
            </button>
          </Link>
          <h1>{data?.title}</h1>
          <div
            className="top_stats"
            style={{ display: id === "policy" ? "none" : "" }}
          >
            <div className="top_stats_left">
              <div className="stats">
                <IoEyeOutline id="icon" />
                <p>1000</p>
              </div>
              <div className="stats">
                <IoCalendarClearOutline id="icon" />
                <p>16.12.2022 1:09</p>
              </div>
            </div>
            <div className="top_stats_right">
              <div className="stats like">
                <SlLike id="icon" />
                <p>645</p>
              </div>
              <div className="stats dislike">
                <SlLike id="icon" />
                <p>645</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product_left_main">
          {data &&
            data.mainData.map((item, index) => (
              <div id="wrapper" key={index}>
                <VideoPlayer videoUrl={item.videoUrl} />
                <h2
                  style={{
                    display: !item.headingBig ? "none" : "inline-block",
                  }}
                >
                  {item?.headingBig}
                </h2>
                <h5
                  style={{
                    display: !item.headingSmall ? "none" : "inline-block",
                  }}
                >
                  {item?.headingSmall}
                </h5>
                <h4
                  style={{ display: !item.heading ? "none" : "inline-block" }}
                >
                  {item?.heading}
                </h4>
                <img
                  src={item?.imgUrl}
                  alt={item.firstImage ? "firstImage" : "there should be image"}
                  style={{ display: !item.imgUrl ? "none" : "inline-block" }}
                />
                <p>{item?.text}</p>
                <i
                  style={{
                    display: !item.warningText ? "none" : "inline-block",
                  }}
                >
                  {item?.warningText}
                </i>
                <button
                  style={{ display: !item.button ? "none" : "inline-block" }}
                >
                  {item?.button}
                </button>
                <b
                  style={{
                    display: !item.boldText ? "none" : "inline-block",
                  }}
                >
                  {item?.boldText}
                </b>
                <div
                  style={{
                    display: !item.icons ? "none" : "flex",
                  }}
                  className="iconwrapper"
                >
                  {item.icons?.map((icon) => (
                    <div
                      key={icon.iconText}
                      style={{
                        display: !icon.icon ? "none" : "flex",
                      }}
                      className="iconBox"
                    >
                      {icon.icon}
                      {icon.iconText}
                    </div>
                  ))}
                </div>
                <AudioPlayer audioUrl={item?.audioUrl} />
              </div>
            ))}
        </div>
        {/* comments */}
        <div
          style={{ display: data?.commentsData ? "inline-block" : "none" }}
          className="product_left_comments"
        >
          <div className="left_comments_top">
            <h6>Izohlar ({data?.commentsData?.commentCount})</h6>
          </div>
          <div className="left_comments_comment-list">
            <div
              className={
                data && data.commentsData?.commentCount == 0
                  ? "no-comments active"
                  : "no-comments"
              }
            >
              <div className="circle">
                <IoChatboxEllipsesOutline />
              </div>
              <p>Hozircha hech qanday izoh topilmadi</p>
            </div>
            {data &&
              data.commentsData?.commentsList.map((comment) => (
                <div key={comment.id} className="comment">
                  <div className="comment_top">
                    <span>{comment.author}</span>
                    <div className="stats">
                      <IoCalendarClearOutline id="icon" />
                      <p>{comment.date}</p>
                    </div>
                  </div>
                  <div className="comment_main">{comment.body}</div>
                </div>
              ))}
          </div>
        </div>
        <form
          style={{ display: data?.commentsData ? "flex" : "none" }}
          className="addComment"
        >
          <h3>Izoh qoldiring!</h3>
          <div className="addComment_first">
            <div className="input">
              <label htmlFor="number">Telefon raqamingiz</label>
              <input id="number" type="text" defaultValue="+998" />
            </div>
            <div className="input">
              <label htmlFor="name">Ism va familiya</label>
              <input id="name" type="text" placeholder="Ismingizni kiriting" />
            </div>
          </div>
          <p>Diqqat! Telefon raqamingizni hech kim ko’rmaydi!</p>
          <div className="textArea">
            <label htmlFor="textarea">Izoh:</label>
            <textarea id="textarea" placeholder="Izohingiz"></textarea>
          </div>
          <button type="submit">Yuborish</button>
        </form>
      </div>
      <div className="product_right" id={id === "policy" ? "privacy" : ""}>
        {data?.asideBarData &&
          data?.asideBarData.map((item) => (
            <AsideBar key={item.title} data={item} />
          ))}
        <PrayerTimes />
      </div>
    </div>
  )
}

export default Product

const ad1 = {
  title: "Ko’zi ojizlar uchun Quron kurslari ochilmoqda!",
  mainData: [
    {
      imgUrl: "/images/Rectangle 89.png",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
  ],
  asideBarData: [
    {
      title: "Video mahsulotlar",
      withFilter: true,
    },
    {
      title: "Audio mahsulotlar",
      withFilter: false,
    },
    {
      title: "Yangiliklar",
      withFilter: false,
    },
  ],
}
const usPurchases = {
  title: "Bizning xaridlar",
  mainData: [
    {
      imgUrl: "/images/1.png",
    },
    {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it`,
    },
    {
      warningText: "Yuklab olish uchun ushbu tugmani bosing.",
    },
    {
      button: "Xaridlar ro’yxatini yuklab olish",
    },
  ],
  asideBarData: [
    {
      title: "Video mahsulotlar",
      withFilter: true,
    },
  ],
}
const privacyAndPolicy = {
  title: "Foydalanish shartlari va Maxfiylik siyosati",
  mainData: [
    {
      heading: "1.Lorem ipsum",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      heading: "2.Lorem ipsum",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      heading: "3.Lorem ipsum",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },

    {
      heading: "5.Lorem ipsum",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      heading: "4.Lorem ipsum",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
  ],
  asideBarData: [
    {
      title: "Video mahsulotlar",
      link: "/new-added",
      withFilter: false,
    },
    {
      title: "Audio mahsulotlar",
      withFilter: false,
    },
  ],
}
const aboutZiyo = {
  title: "Bizning maqsadimiz faqatgina insonlarga diniy bilim berish!",
  mainData: [
    {
      imgUrl: "/images/aboutziyo.png",
      firstImage: true,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      imgUrl: "/images/aboutziyo (1).png",
    },
    {
      heading: "Lorem Ipsum is simply dummy text of the printing and",
    },
    {
      boldText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
  ],
  asideBarData: [
    {
      title: "Maqolalar",
      link: "/new-added",
      withFilter: true,
    },
    {
      title: "Audio mahsulotlar",
      link: "/new-added",
      withFilter: false,
    },
  ],
}
const people1 = {
  mainData: [
    {
      imgUrl: "/images/people1.png",
      firstImage: true,
    },
    {
      headingSmall: "Bosh direktor",
    },
    {
      headingBig: "Nosirjonov Anvarjon",
    },
    {
      icons: [
        {
          icon: <HiOutlineEnvelope id="icon" />,
          iconText: "+998 97 628 28 82",
        },
        {
          icon: <HiOutlineEnvelope id="icon" />,
          iconText: "Faksa.the@gmail.com",
        },
      ],
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      heading: " ",
    },
    {
      heading: " ",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
  ],
  asideBarData: [
    {
      title: "Video mahsulotlar",
      link: "/new-added",
      withFilter: true,
    },
    {
      title: "Audio mahsulotlar",
      link: "/new-added",
      withFilter: false,
    },
  ],
}
const video1 = {
  title: "Lorem Ipsum is simply dummy",
  mainData: [
    {
      videoUrl:
        "https://www.youtube-nocookie.com/embed/HO-r634Sq98?si=qIE5yRGBev1AwOAc",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
  ],
  asideBarData: [
    {
      title: "Video mahsulotlar",
      link: "/new-added",
      withFilter: true,
    },
    {
      title: "Audio mahsulotlar",
      link: "/new-added",
      withFilter: false,
    },
    {
      title: "Yangiliklar",
      link: "/new-added",
      withFilter: false,
    },
  ],
  commentsData: {
    commentCount: 65,
    commentsList: [
      {
        id: "1",
        author: "Eshonov Fakhriyor",
        date: "16.12.2022 1:09",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
      {
        id: "2",
        author: "Eshonov Fakhriyor",
        date: "16.12.2022 1:09",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
      {
        id: "3",
        author: "Eshonov Fakhriyor",
        date: "16.12.2022 1:09",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
}
const audio1 = {
  title: "Lorem Ipsum is simply dummy",
  mainData: [
    {
      imgUrl: "/images/Rectangle 12 (3).png",
      firstImage: true,
    },
    {
      warningText: "Audioni eshitish uchun, play tugmasini bosing!",
    },
    {
      audioUrl:
        "https://media.blubrry.com/muslimcentralaudio/podcasts.muslimcentral.com/the-productive-muslim-podcast/the-productive-muslim-podcast-muslimcentral.com-season-4-ep-5-2018-02-05-10-03-03.mp3",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
  ],
  asideBarData: [
    {
      title: "Audio mahsulotlar",
      link: "/audios",
      withFilter: true,
    },
    {
      title: "Video mahsulotlar",
      link: "/videos",
      withFilter: false,
    },
    {
      title: "Yangiliklar",
      link: "/new-added",
      withFilter: false,
    },
  ],
  commentsData: {
    commentCount: 0,
    commentsList: [],
  },
}
const photo1 = {
  title: "Lorem Ipsum is simply dummy",
  mainData: [
    {
      imgUrl: "/images/Rectangle 12 (3).png",
      firstImage: true,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      imgUrl: "/images/Rectangle 12 (3).png",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
      imgUrl: "/images/Rectangle 12 (3).png",
    },
  ],
  asideBarData: [
    {
      title: "Video mahsulotlar",
      link: "/categories/videos",
      withFilter: true,
    },
    {
      title: "Audio mahsulotlar",
      link: "/audios",
      withFilter: false,
    },
    {
      title: "Yangiliklar",
      link: "/new-added",
      withFilter: false,
    },
  ],
  commentsData: {
    commentCount: 34,
    commentsList: [
      {
        id: "1",
        author: "Tursunboyev Muhammadzohid",
        date: "16.12.2022 1:09",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
      {
        id: "2",
        author: "Eshonov Fakhriyor",
        date: "16.12.2022 1:09",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
      {
        id: "3",
        author: "Eshonov Fakhriyor",
        date: "16.12.2022 1:09",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
}
