import "./BarsBlock.scss"
import { IoCloseOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { GoHome } from "react-icons/go"
import { PiImageLight, PiMusicNote } from "react-icons/pi"
import { TbNews } from "react-icons/tb"
import { IoDocumentTextOutline } from "react-icons/io5"
import { RiUserLine } from "react-icons/ri"
import { LuUserSquare } from "react-icons/lu"
import { LiaHandshake } from "react-icons/lia"
import { TiGlobeOutline } from "react-icons/ti"
import { useDispatch, useSelector } from "react-redux"
import { disableSomeThing } from "../../redux/slices/states"

const BarsBlock = () => {
  const states = useSelector((state) => state.states)
  const dispatch = useDispatch()

  const closeBars = () => {
    dispatch(disableSomeThing("backgroundState"))
    dispatch(disableSomeThing("barsState"))
  }

  return (
    <div className={states.barsState ? "barsBlock active" : "barsBlock"}>
      <div className="top">
        <div className="logo">
          <img src="/images/ziyo logo.svg" alt="logo" />
          <div className="logo_name">
            <h2>ZIYO</h2>
            <p>MEDIAMARKAZI</p>
          </div>
        </div>
        <div onClick={closeBars} className="close">
          <IoCloseOutline />
        </div>
      </div>
      <div className="content">
        <ul>
          <NavLink onClick={closeBars} className="link" to={"/"}>
            <GoHome />
            <p>Asosiy</p>
          </NavLink>
          <NavLink onClick={closeBars} className="link" to={"/photos"}>
            <PiImageLight />
            <p>Fotolavhalar</p>
          </NavLink>
          <NavLink onClick={closeBars} className="link" to={"/audios"}>
            <PiMusicNote />
            <p>Audio</p>
          </NavLink>
          <NavLink onClick={closeBars} className="link" to={"/messages"}>
            <TbNews />
            <p>Xabarlar</p>
          </NavLink>
          <NavLink onClick={closeBars} className="link" to={"/articles"}>
            <IoDocumentTextOutline />
            <p>Maqolalar</p>
          </NavLink>
          <NavLink
            onClick={closeBars}
            className="link"
            to={"/product/about-ziyo"}
          >
            <div className="wrap">
              <object
                className="svg"
                type="image/svg+xml"
                data="/svg/navitem logo.svg"
              ></object>
            </div>
            <p>Ziyo haqida</p>
          </NavLink>
          <NavLink onClick={closeBars} className="link" to={"/leadership"}>
            <RiUserLine />
            <p>Rahbariyat</p>
          </NavLink>
          <NavLink onClick={closeBars} className="link" to={"/contacts"}>
            <LuUserSquare />
            <p>Kontaktlar</p>
          </NavLink>
          <NavLink
            onClick={closeBars}
            className="link"
            to={"/product/us-purchases"}
          >
            <LiaHandshake />
            <p>Xaridlar</p>
          </NavLink>
        </ul>
        <div className="language">
          <TiGlobeOutline />
          <p>
            <b id="current">UZ</b> <span>|</span> RU <span>|</span> ENG
          </p>
        </div>
      </div>
    </div>
  )
}

export default BarsBlock
