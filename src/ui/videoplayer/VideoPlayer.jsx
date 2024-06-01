import "./VideoPlayer.scss"
import { useRef, useState } from "react"
import { FaPlay } from "react-icons/fa"
import ReactPlayer from "react-player"

const VideoPlayer = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div
      style={{ display: videoUrl ? "inline-block" : "none" }}
      className="videoPlayer"
    >
      <ReactPlayer
        width="100%"
        height="100%"
        className="player"
        url={videoUrl}
        playing={isPlaying}
      />
      <div
        onClick={() => setIsPlaying(true)}
        className={!isPlaying ? "play-block active" : "play-block"}
      >
        <div className="play-button">
          <FaPlay />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
