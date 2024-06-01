import { Pagination } from "@mui/material"
import { PhotoBox } from "../../ui"
import "./Photos.scss"

const Photos = () => {
  return (
    <div className="photos">
      <div className="photos_top">
        <h1>Fotolavhalar</h1>
      </div>
      <div className="photos_boxes">
        {mockData && mockData.map((item) => <PhotoBox data={item} />)}
      </div>
      <Pagination count={10} />
    </div>
  )
}

export default Photos

const mockData = [
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
  {
    link: "/categories/photos",
    name: "Lorem Ipsum is simply dummy",
    imgUrl: "/images/Rectangle 12 (2).png",
    viewCount: "1000",
    date: "16.12.2022 1:09",
  },
]
