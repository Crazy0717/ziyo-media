import { IoIosArrowForward } from "react-icons/io"
import "./RadioBox.scss"

const RadioBox = () => {
  return (
    <div className="radioBox">
      <div className="radioBox_top">
        <img src="/images/MTRK 1.png" alt="" />
      </div>
      <div className="radioBox_bottom">
        <p>Lorem ipsum radiosi</p> <IoIosArrowForward id="icon" />
      </div>
    </div>
  )
}

export default RadioBox
