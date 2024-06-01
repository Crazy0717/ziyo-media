import { IoCalendarClearOutline, IoEyeOutline } from "react-icons/io5"
import "./PhotoBox.scss"
import { Link } from "react-router-dom"

const PhotoBox = ({ data }) => {
  return (
    <Link to={data.link} className="photoBox">
      <img src={data.imgUrl} alt="" />
      <div className="photoBox_content">
        <div className="statistics">
          <div className="stats">
            <IoEyeOutline className="icon" />
            <p>{data.viewCount}</p>
          </div>
          <div className="stats">
            <IoCalendarClearOutline className="icon calendar" />
            <p>{data.date}</p>
          </div>
        </div>
        <h3>{data.name}</h3>
      </div>
    </Link>
  )
}

export default PhotoBox
