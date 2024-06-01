import { Link } from "react-router-dom"
import "./ArticleBox.scss"
import { IoCalendarClearOutline, IoEyeOutline } from "react-icons/io5"

const ArticleBox = ({ item }) => {
  return (
    <Link to={item.link} className="articleBox">
      <div className="articleBox_left">
        <img src={item.imagePath} alt="there should be image" />
      </div>
      <div className="articleBox_right">
        <div className="right_main">
          <h6>Lorem Ipsum is simply dummy</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
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
    </Link>
  )
}

export default ArticleBox
