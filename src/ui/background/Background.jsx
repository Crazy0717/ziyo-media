import "./Background.scss"
import { disablEveryThing } from "../../redux/slices/states"
import { useDispatch, useSelector } from "react-redux"

const Background = () => {
  const states = useSelector((state) => state.states)
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => dispatch(disablEveryThing())}
      className={states.backgroundState ? "background active" : "background"}
    ></div>
  )
}

export default Background
