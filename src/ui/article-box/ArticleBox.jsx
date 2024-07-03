import { Link } from "react-router-dom"
import "./ArticleBox.scss"
import { IoCalendarClearOutline, IoEyeOutline } from "react-icons/io5"

const ArticleBox = ({ item }) => {
  return (
    <Link to={item?.link} className="articleBox">
      <div className="articleBox_left">
        <img src={item?.imagePath} alt="there should be image" />
      </div>
      <div className="articleBox_right">
        <div className="right_main">
          <h6>{item.title}</h6>
          <p>{item.description}</p>
        </div>

        <div className="right_bottom">
          <div className="bottom_stats">
            <IoEyeOutline id="icon" />
            <p>{item.viewCount}</p>
          </div>
          <div className="bottom_stats">
            <IoCalendarClearOutline id="icon" />
            <p>{item.date}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleBox
