import { RadioBox } from "../../ui"
import "./RadioSlider.scss"

const RadioSlider = () => {
  return (
    <div className="radioSlider">
      <div className="radioSlider_top">
        <h2>Radiolar</h2>
        <button>Barchasini ko’rish</button>
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
