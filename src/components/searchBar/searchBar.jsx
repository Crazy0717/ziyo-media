import { IoCloseOutline } from "react-icons/io5"
import "./SearchBar.scss"
import { RxMagnifyingGlass } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { disableSomeThing } from "../../redux/slices/states"

const searchBar = () => {
  const states = useSelector((state) => state.states)
  const dispatch = useDispatch()

  useEffect(() => {
    if (states.searchState) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }, [states.searchState])

  const closeSearchModal = () => {
    dispatch(disableSomeThing("backgroundState"))
    dispatch(disableSomeThing("searchState"))
  }
  return (
    <div className={states.searchState ? "searchBar active" : "searchBar"}>
      <div className="top">
        <h5>Qidiruv</h5>

        <button onClick={closeSearchModal} className="close">
          <IoCloseOutline />
        </button>
      </div>
      <div className="main">
        <div className="input">
          <RxMagnifyingGlass id="icon" />
          <input type="text" placeholder="Kalit so’zini kiriting" />
        </div>
      </div>
    </div>
  )
}

export default searchBar
