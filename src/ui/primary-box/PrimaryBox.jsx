import { IoCalendarClearOutline, IoEyeOutline } from "react-icons/io5"
import "./PrimaryBox.scss"

const PrimaryBox = ({ data }) => {
  return (
    <div className="primaryBox">
      <div className="primaryBox_top">
        <span>{data.badge}</span>
        <div className="time">{data.time}</div>
        <img src={data.imagePath} alt="there should be image" />
      </div>
      <div className="primaryBox_content">
        <div className="right_main">
          <p>IMOM Al Buxoriy o’g’itlari</p>
          <h6>Lorem Ipsum is simply dummy</h6>
        </div>

        <div className="right_bottom">
          <div className="bottom_stats">
            <IoEyeOutline id="icon" />
            <p>1000</p>
          </div>
          <div className="bottom_stats">
            <IoCalendarClearOutline id="icon" />
            <p>16.12.2022 1:09</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryBox
