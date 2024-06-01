import { AudioBox } from "../../ui"
import "./Audios.scss"

const Audios = () => {
  return (
    <div className="audios">
      <div className="audios_top">
        <h1>Audio maxsulotlar</h1>
      </div>
      <div className="audios_boxes">
        {mockData && mockData.map((item) => <AudioBox item={item} />)}
      </div>
    </div>
  )
}

export default Audios

const mockData = [
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
  {
    imgUrl: "/images/Rectangle 12.png",
    audiosCount: 126,
    name: "IMOM Al Buxoriy o’g’itlari",
  },
]
