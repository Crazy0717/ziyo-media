import { useState } from "react"
import "./AsideBar.scss"
import { Link } from "react-router-dom"
import { AsideBox } from "../../ui"

const AsideBar = ({ data }) => {
  const [selected, setSelected] = useState(1)

  return (
    <aside>
      <div className="aside_top">
        <h5>{data.title}</h5>
        <Link to={data?.link}>Barchasini ko’rish</Link>
      </div>
      <div
        className={
          data.withFilter ? "aside_filter active" : "aside_filter nonactive"
        }
      >
        <button
          onClick={() => setSelected(1)}
          className={selected == 1 ? "active" : ""}
        >
          Barcha videolar
        </button>
        <button
          onClick={() => setSelected(2)}
          className={selected == 2 ? "active" : ""}
        >
          O’xshashlar
        </button>
        <button
          onClick={() => setSelected(3)}
          className={selected == 3 ? "active" : ""}
        >
          Eng so’ngilari
        </button>
      </div>
      <div className="aside_boxes">
        <AsideBox />
        <AsideBox />
        <AsideBox />
        <AsideBox />
      </div>
    </aside>
  )
}

export default AsideBar
