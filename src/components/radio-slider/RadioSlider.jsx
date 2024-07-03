import { RadioBox } from "../../ui"
import "./RadioSlider.scss"

const RadioSlider = ({title, btnText}) => {
  return (
    <div className="radioSlider">
      <div className="radioSlider_top">
        <h2>{title}</h2>
        <button>{btnText}</button>
      </div>
      <div className="radioSlider_content">
        <RadioBox />
        <RadioBox />
        <RadioBox />
        <RadioBox />
      </div>
    </div>
  )
}

export default RadioSlider
