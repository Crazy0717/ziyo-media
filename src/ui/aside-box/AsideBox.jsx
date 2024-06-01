import { IoCalendarClearOutline, IoEyeOutline } from "react-icons/io5"
import "./AsideBox.scss"

const AsideBox = () => {
  return (
    <div className="asideBox">
      <div className="asideBox_left">
        <img src="/images/Rectangle 12 (2).png" alt="" />
      </div>
      <div className="asiideBox_right">
        <span>IMOM Al Buxoriy o’g’itlari</span>
        <h6>Lorem Ipsum is simply dum...</h6>
        <p>Lorem Ipsum is simply dummy text of </p>
        <div className="right_stats">
          <div className="stats">
            <IoEyeOutline id="icon" />
            <p>1000</p>
          </div>
          <div className="stats">
            <IoCalendarClearOutline id="icon" className="calendar" />
            <p>16.12.2022 1:09</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideBox
