import { IoCalendarClearOutline, IoEyeOutline } from "react-icons/io5"
import "./PrimaryBox.scss"
import { Link } from "react-router-dom"

const PrimaryBox = ({ data }) => {
  return (
    <Link to={data.link} className="primaryBox">
      <div className="primaryBox_top">
        <span>{data.badge}</span>
        <div className="time">{data.time}</div>
        <img src={data.imagePath} alt="there should be image" />
      </div>
      <div className="primaryBox_content">
        <div className="right_main">
          <p>{data.author}</p>
          <h6>{data.title}</h6>
        </div>
        <div className="right_bottom">
          <div className="bottom_stats">
            <IoEyeOutline id="icon" />
            <p>{data.viewCount}</p>
          </div>
          <div className="bottom_stats">
            <IoCalendarClearOutline id="icon" />
            <p>{data.date}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PrimaryBox
