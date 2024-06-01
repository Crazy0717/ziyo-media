import { LinearProgress } from "@mui/material"
import { useRef, useState, useEffect } from "react"
import ReactHowler from "react-howler"
import "./AudioPlayer.scss"
import { FaPlay } from "react-icons/fa"
import { GiPauseButton } from "react-icons/gi"

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.seek()
        const duration = audioRef.current.duration()
        setProgress((currentTime / duration) * 100)
      }
    }

    let interval = null
    if (isPlaying) {
      interval = setInterval(updateProgress, 100)
    } else if (!isPlaying) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  if (audioUrl) {
    return (
      <div className="audio-player">
        <ReactHowler
          ref={audioRef}
          src={audioUrl}
          playing={isPlaying}
          onLoad={() => setDuration(audioRef.current.duration())}
        />
        <button id="audio-btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <GiPauseButton /> : <FaPlay id="play_btn" />}
        </button>
        <div className="audio-player_right">
          <div className="times">
            <p>{new Date(Math.round(audioRef.current?.seek() || 0) * 1000).toISOString().substring(11, 19)}</p>
            <p>{new Date(duration * 1000).toISOString().substring(11, 19)}</p>
          </div>
          <LinearProgress variant="determinate" value={progress} />
        </div>
      </div>
    )
  }
}

export default AudioPlayer
// for test ⬇
// http://goldfirestudios.com/proj/howlerjs/sound.ogg
// https://media.blubrry.com/muslimcentralaudio/podcasts.muslimcentral.com/the-productive-muslim-podcast/the-productive-muslim-podcast-muslimcentral.com-season-4-ep-5-2018-02-05-10-03-03.mp3
