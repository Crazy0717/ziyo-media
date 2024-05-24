import "./VideoPlayer.scss"
import { useRef, useState } from "react"
import { FaPlay } from "react-icons/fa"
import ReactPlayer from "react-player"

const VideoPlayer = ({videoUrl}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="videoPlayer">
      
      <ReactPlayer
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
      {/* <iframe
        ref={ref}
        src="https://www.youtube-nocookie.com/embed/HO-r634Sq98?si=GTMwTjJ_nsjVe2cf&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
    </div>
  )
}

export default VideoPlayer
