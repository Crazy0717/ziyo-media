import { Link } from "react-router-dom"
import "./AudioBox.scss"

const AudioBox = ({ item }) => {
  return (
    <Link to="/categories/audios" className="audioBox">
      <div className="audioBox_top">
        <img src={item.imgUrl} alt="" />
        <div className="audioBox_top_audio-count">
          Audio soni: {item.audiosCount}
        </div>
        <div className="audioBox_top_blackbackground"></div>
      </div>
      <h5>{item.name}</h5>
    </Link>
  )
}

export default AudioBox
