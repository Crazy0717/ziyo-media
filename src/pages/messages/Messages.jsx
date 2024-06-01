import { Pagination } from "@mui/material"
import { ArticleBox, PhotoBox, PrimaryBox } from "../../ui"
import "./Messages.scss"

const Messages = () => {
  return (
    <div className="messages">
      <div className="messages_top">
        <h1>Xabarlar</h1>
      </div>
      <div className="messages_main">
        <div className="main_top">
          <div className="main_top_left">
            <PhotoBox data={mockData.photoData} />
          </div>
          <div className="main_top_right">
            {mockData &&
              mockData.articleBox.map((item, i) => (
                <ArticleBox key={i} item={item} />
              ))}
          </div>
        </div>
        <div className="messages_boxes">
          {mockData.mainBoxesData &&
            mockData.mainBoxesData.map((item, i) => (
              <PrimaryBox data={item} key={i} />
            ))}
        </div>
        <Pagination count={10} />
      </div>
    </div>
  )
}

export default Messages

const mockData = {
  photoData: {
    link: "/photos",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1453",
    date: "16.12.2022 1:09",
    name: "Lorem Ipsum is simply dummy simply dummy ipsum is simply",
  },
  articleBox: [
    {
      imagePath: "/images/Rectangle 12 (2).png",
      link: "/product/photo1",
    },
    {
      imagePath: "/images/Rectangle 12 (2).png",
      link: "/product/photo1",
    },
    {
      imagePath: "/images/Rectangle 12 (2).png",
      link: "/product/photo1",
    },
  ],
  mainBoxesData: [
    {
      imagePath: "/images/Rectangle 12.png",
      time: "10:32",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (1).png",
      time: "7:11",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (2).png",
      time: "10:48",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "7:42",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "10:32",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (1).png",
      time: "7:11",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (2).png",
      time: "10:48",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "7:42",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "10:32",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (1).png",
      time: "7:11",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (2).png",
      time: "10:48",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "7:42",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "10:32",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (1).png",
      time: "7:11",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (2).png",
      time: "10:48",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "7:42",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "10:32",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (1).png",
      time: "7:11",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (2).png",
      time: "10:48",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "7:42",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "10:32",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (1).png",
      time: "7:11",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12 (2).png",
      time: "10:48",
      link: "/product/message1",
    },
    {
      imagePath: "/images/Rectangle 12.png",
      time: "7:42",
      link: "/product/message1",
    },
  ],
}
