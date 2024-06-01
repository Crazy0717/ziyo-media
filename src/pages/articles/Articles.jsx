import { Pagination } from "@mui/material"
import { PrimaryBox } from "../../ui"
import "./Articles.scss"

const Articles = () => {
  return (
    <div className="articles">
      <div className="articles_top">
        <h1>Maqolalar</h1>
      </div>
      <div className="articles_boxes">
        {mockData &&
          mockData.map((item, i) => <PrimaryBox data={item} key={i} />)}
      </div>
      <Pagination count={10} />
    </div>
  )
}

export default Articles

const mockData = [
  {
    imagePath: "/images/Rectangle 12.png",
    time: "10:32",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "7:11",
    badge: "audio",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (2).png",
    time: "10:48",
    badge: "foto",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "7:42",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "10:32",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "7:11",
    badge: "audio",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (2).png",
    time: "10:48",
    badge: "foto",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "7:42",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "10:32",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "7:11",
    badge: "audio",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (2).png",
    time: "10:48",
    badge: "foto",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "7:42",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "10:32",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "7:11",
    badge: "audio",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (2).png",
    time: "10:48",
    badge: "foto",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "7:42",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "10:32",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "7:11",
    badge: "audio",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (2).png",
    time: "10:48",
    badge: "foto",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "7:42",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "10:32",
    badge: "video",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (1).png",
    time: "7:11",
    badge: "audio",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12 (2).png",
    time: "10:48",
    badge: "foto",
    link: "/product/article1",
  },
  {
    imagePath: "/images/Rectangle 12.png",
    time: "7:42",
    badge: "video",
    link: "/product/article1",
  },
]
