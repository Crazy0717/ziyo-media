import { useState } from "react"
import "./News.scss"
import { PrimaryBox } from "../../ui"

const News = () => {
  const [selected, setSelected] = useState(1)

  return (
    <div className="news">
      <div className="news_top">
        <h1>Yangi qo’shilganlar</h1>
        <div className="news_categories">
          <button
            onClick={() => setSelected(1)}
            className={selected == 1 ? "active" : ""}
          >
            Barchasi
          </button>
          <button
            onClick={() => setSelected(2)}
            className={selected == 2 ? "active" : ""}
          >
            Audio
          </button>
          <button
            onClick={() => setSelected(3)}
            className={selected == 3 ? "active" : ""}
          >
            Video
          </button>
          <button
            onClick={() => setSelected(4)}
            className={selected == 4 ? "active" : ""}
          >
            Xabarlar
          </button>
        </div>
      </div>

      <div className="news_content">
        {mockData &&
          mockData.map((item, index) => <PrimaryBox key={index} data={item} />)}
      </div>
    </div>
  )
}

export default News

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
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "22:58",
    badge: "audio",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "22:58",
    badge: "audio",
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
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "22:58",
    badge: "audio",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "22:58",
    badge: "audio",
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
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "22:58",
    badge: "audio",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "22:58",
    badge: "audio",
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
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "22:58",
    badge: "audio",
  },
]
