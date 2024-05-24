import "./Nav.scss"
import { GoHome } from "react-icons/go"
import { NavItem } from "../../ui"
import { HiBars3, HiOutlinePlay } from "react-icons/hi2"
import { PiImageLight, PiMusicNote } from "react-icons/pi"
import { TbNews } from "react-icons/tb"
import { IoDocumentTextOutline } from "react-icons/io5"
import { RiUserLine } from "react-icons/ri"
import { LuUserSquare } from "react-icons/lu"
import { LiaHandshake } from "react-icons/lia"
import { TiGlobeOutline } from "react-icons/ti"
import { RxMagnifyingGlass } from "react-icons/rx"
import { useDispatch } from "react-redux"
import { enableSomeThing } from "../../redux/slices/states"
import { BarsBlock, SearchBar } from ".."

const Nav = () => {
  const dispatch = useDispatch()

  const active = (stateName) => {
    dispatch(enableSomeThing("backgroundState"))
    dispatch(enableSomeThing(stateName))
  }

  return (
    <nav>
      <BarsBlock />
      <SearchBar />
      <div className="left">
        <div onClick={() => active("barsState")} className="bars">
          <HiBars3 />
        </div>
        <div className="logo">
          <img src="/images/ziyo logo.svg" alt="logo" />
          <div className="logo_name">
            <h2>ZIYO</h2>
            <p>MEDIAMARKAZI</p>
          </div>
        </div>
        <ul>
          <NavItem urlPath={"/"} name={"Asosiy"} icon={<GoHome />} />
          <NavItem
            urlPath={"/videos"}
            name={"Video"}
            icon={<HiOutlinePlay />}
          />
          <NavItem
            urlPath={"/images"}
            name={"Fotolavhalar"}
            icon={<PiImageLight />}
          />
          <NavItem urlPath={"/audio"} name={"Audio"} icon={<PiMusicNote />} />
          <NavItem urlPath={"/messages"} name={"Xabarlar"} icon={<TbNews />} />
          <NavItem
            urlPath={"/articles"}
            name={"Maqolalar"}
            icon={<IoDocumentTextOutline />}
          />
          <NavItem
            urlPath={"/about-ziyo"}
            name={"Ziyo haqida"}
            icon={
              <object
                className="svg"
                type="image/svg+xml"
                data="/svg/navitem logo.svg"
              ></object>
            }
          />
          <NavItem
            urlPath={"/leadership"}
            name={"Rahbariyat"}
            icon={<RiUserLine />}
          />
          <NavItem
            urlPath={"/contacts"}
            name={"Kontaktlar"}
            icon={<LuUserSquare />}
          />
          <NavItem
            urlPath={"/purchases"}
            name={"Xaridlar"}
            icon={<LiaHandshake />}
          />
        </ul>
      </div>
      <div className="right">
        <div className="language">
          <TiGlobeOutline />
          <p>
            <b id="current">UZ</b> <span>|</span> RU <span>|</span> ENG
          </p>
        </div>
        <div onClick={() => active("searchState")} className="search">
          <RxMagnifyingGlass />
          <p>Qidiruv</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav
